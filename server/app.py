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
import numpy as np
# from sklearn.model_selection import cross_validate
from sklearn.model_selection import train_test_split
from sklearn import preprocessing, svm
from sklearn.linear_model import LinearRegression

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

