import requests
from flask import Flask, request, make_response, jsonify, send_from_directory
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)
import pandas as pd
import quandl
import math
import random
import os
import json
import numpy as np
# from sklearn.model_selection import cross_validate
from sklearn.model_selection import train_test_split
from sklearn import preprocessing, svm
from sklearn.linear_model import LinearRegression
from sklearn.svm import SVR
from sklearn.ensemble import RandomForestRegressor
from sklearn.ensemble import GradientBoostingRegressor
from sklearn.preprocessing import scale

from alpha_vantage.timeseries import TimeSeries
ts = TimeSeries(key='OLU80OMWE8R781Q6')

# if 'ON_HEROKU' in os.environ:
@app.route('/')
def index():
    return send_from_directory('client/build', 'index.html')


@app.route('/index.html')
def index2():
    return send_from_directory('client/build', 'index.html')


@app.route('/static/css/<filename>')
def index_css(filename):
    return send_from_directory('client/build/static/css', filename)


@app.route('/static/js/<filename>')
def index_js(filename):
    return send_from_directory('client/build/static/js', filename)


@app.route('/service-worker.js')
def index_service_worker():
    return send_from_directory('client/build', 'service-worker.js')


@app.route('/manifest.json')
def index_manifest():
    return send_from_directory('client/build', 'manifest.json')


@app.route('/favicon-16x16.png')
def index_favicon16():
    return send_from_directory('client/build', 'favicon-16x16.png')


@app.route('/favicon-32x32.png')
def index_favicon32():
    return send_from_directory('client/build', 'favicon-32x32.png')


@app.route('/favicon-96x96.png')
def index_favicon96():
    return send_from_directory('client/build', 'favicon-96x96.png')

@app.route('/getstockdata/')
def getStockData():
    print('Sending request')
    stock = request.args.get('stock', default=None, type=None)
    data, meta_data = ts.get_intraday(symbol=stock, interval='30min', outputsize='full')

    allDataLength = 250

    mlData = [[] for _ in data.items()]
    index = 0
    for attr, val in data.items():
        mlData[index].append(attr)
        for item in val.items():
            mlData[index].append(float(item[1]))
        index += 1

    savedDates = [item[0] for item in mlData]
    mlData = pd.DataFrame(mlData, columns=['date', 'open', 'high', 'low', 'close', 'volume'])

    def FormatForModel(dataArray):
        dataArray['HL_PCT'] = (dataArray['high'] - dataArray['close']) / dataArray['close'] * 100.0
        dataArray['PCT_change'] = (dataArray['close'] - dataArray['open']) / dataArray['open'] * 100.0
        dataArray = dataArray[['close', 'HL_PCT', 'PCT_change', 'volume']]
        dataArray.fillna(-99999, inplace=True)
        return dataArray

    mlData = FormatForModel(mlData)

    forecast_col = 'close'
    forecast_out = int(math.ceil(0.12 * allDataLength))

    mlData['label'] = mlData[forecast_col].shift(-forecast_out)
    mlData.dropna(inplace=True)

    X = np.array(mlData.drop(['label'], 1))
    X = preprocessing.scale(X)
    X_data = X[-allDataLength:]
    X = X[:-allDataLength]
    data = mlData[-allDataLength:]
    mlData = mlData[:-allDataLength]
    y = np.array(mlData['label'])

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.7)

    clf = LinearRegression()
    clf.fit(X_train, y_train)
    accuracy = clf.score(X_test, y_test)

    prediction = clf.predict(X_data)
    data = data[['close']]
    data = data.rename(columns={'close': 'EOD'})
    data['prediction'] = prediction[:]
    data['name'] = pd.Series(savedDates)
    data['accuracy'] = pd.Series(accuracy)
    data = data.to_json(orient='table')

    response = make_response(data)
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response


clf_lr = LinearRegression()
clf_rf = RandomForestRegressor(n_estimators=100)
clf_gb = GradientBoostingRegressor(n_estimators=1000)

@app.route('/tesla_stocks')
def getTeslaStocks():
    df = pd.read_csv("data/TSLA.csv")

    x_train = []
    y_train = []
    x_test = []
    y_test = []

    h = [0]
    for i in range(1, len(df)):
        h.append(df.iloc[i - 1]['close'])
    df['prev_close'] = h
    df = df.drop(df.index[0])

    X = df[['date', 'open', 'high', 'low','prev_close', 'volume']]
    # X = X[::-1]
    Y = df[['close']]

    # for col in [['date', 'open', 'high', 'low', 'prev_close', 'volume']]:
    #     X[col] = scale(X[col])

    x_train, x_test, y_train, y_test = train_test_split(X, Y, test_size=35, shuffle=False)

    real_date = [_ for _ in x_test['date']]

    for col in [['date', 'open', 'high', 'low', 'prev_close', 'volume']]:
        x_train[col] = scale(x_train[col])
        x_test[col] = scale(x_test[col])

    # Convert lists into numpy arrays
    x_train = np.array(x_train)
    y_train = np.array(y_train)
    x_test = np.array(x_test)
    y_test = np.array(y_test)

    # Linear regression
    clf_lr.fit(x_train, y_train)
    y_pred_lr = clf_lr.predict(x_test)

    # Random forest regressor
    clf_rf.fit(x_train, y_train)
    y_pred_rf = clf_rf.predict(x_test)

    # Gradient boosting
    clf_gb.fit(x_train, y_train)
    y_pred_gb = clf_gb.predict(x_test)

    response = json.dumps({
        'real_date': real_date,
        'real_data': [_[0] for _ in y_test],
        'lr': [_[0] for _ in y_pred_lr],
        'rf': [_ for _ in y_pred_rf],
        'gb': [_ for _ in y_pred_gb],
        'gb_accuracy': clf_gb.score(x_test,y_test)
    })

    response = make_response(response)
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response


@app.route('/predict_next')
def predictNextPrice():
    newData = request.args.get('data', default=None, type=None)
    newData = json.loads(newData)

    dataToPredict = [float(newData['open']), float(newData['high']), float(newData['low']), float(newData['close']), float(newData['close']), float(newData['volume'])]

    dataToPredict = scale(dataToPredict)

    predictedValue = clf_gb.predict([dataToPredict])

    with open('data/TSLA.csv', 'a') as fd:
        data_to_write = '\n' + ''.join(newData['date'].split('-'))[:8] + ',' + newData['open'] + ',' + newData['high'] + ',' + newData['low'] + ',' + newData['close'] + ',' + newData['close'] + ',' + newData['volume']
        # fd.write(data_to_write)

    print(predictedValue)
    response = json.dumps([_ for _ in predictedValue])

    response = make_response(response)
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response

