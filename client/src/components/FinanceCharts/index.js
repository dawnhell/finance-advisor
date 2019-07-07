import React, { useState, useEffect } from 'react';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, LineChart, Line, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Tabs, Spin, Card, Table } from 'antd';
import { fetchStockData, fetchTeslaStockData } from '../../services/api.service';

import './styles.scss';

const { TabPane } = Tabs;

const STOCKS = [
  { name: 'Apple Inc.', value: 'AAPL' },
  { name: 'Microsoft', value: 'MSFT' },
  { name: 'Google', value: 'GOOGL' },
  { name: 'IBM', value: 'IBM' },
  { name: 'Intel', value: 'INTC' },
  { name: 'Cisco Systems', value: 'CSCO' },
  { name: 'Oracle', value: 'ORCL' },
  { name: 'Facebook', value: 'FB' }
];

const PERIOD_TO_PREDICT = 7;  // N days to predict

const FinanceCharts = () => {
  const [stocksCurrencyData, setStocksCurrencyData] = useState({});
  const [teslaStocks, setTeslaStocks] = useState([]);
  const [predictionPercentage, setPercentagePrediction] = useState([]);

  useEffect(() => {
    /*if (!stocksCurrencyData[STOCKS[0].name]) {
      fetchStockData(STOCKS[0].value)
        .then(_ => _.json())
        .then((res) => {
          !stocksCurrencyData[STOCKS[0].name] && setStocksCurrencyData({
            ...stocksCurrencyData,
            [STOCKS[0].name]: res.data.reverse().map(item => ({ name: item.name, realValue: item.EOD, prediction: item.prediction, accuracy: item.accuracy }))
          });
        })
    }*/

    if (!teslaStocks.length) {
      fetchTeslaStockData()
        .then(_ => _.json())
        .then((res) => {
          setTeslaStocks(res.real_data.map((_, index) => ({
            realValue: res.real_data[index],
            // lr: res.lr[index],
            // rf: res.rf[index],
            gb: res.gb[index],
            date: res.real_date[index]
          })).sort((u1, u2) => u1.date > u2.date ? 1 : -1));

          let predicted = [];
          for (let i = 0; i < res.real_data.length - 1; i += PERIOD_TO_PREDICT) {
            let realDiff = res.real_data[i] - res.real_data[i + PERIOD_TO_PREDICT];
            let gbDiff = res.gb[i] - res.gb[i + PERIOD_TO_PREDICT];

            let startDate = new Date(`${String(res.real_date[i]).slice(0, 4)}-${String(res.real_date[i]).slice(4, 6)}-${String(res.real_date[i]).slice(6, 8)}`);

            let endDate = startDate;
            endDate.setDate(endDate.getDate() + PERIOD_TO_PREDICT);

            predicted.push({
              key: `${startDate}_${endDate}_${realDiff}_${gbDiff}`,
              startDate: startDate.toUTCString(),
              endDate: endDate.toUTCString(),
              realDiff,
              gbDiff,
              predictedRight: String((realDiff > 0 && gbDiff > 0) || (realDiff < 0 && gbDiff < 0))
            });
          }
          setPercentagePrediction(predicted);
        })
    }
  });

  const getStock = (stock) => {
    stock && stock.value && fetchStockData(stock.value)
      .then(res => res.json())
      .then((res) => {
        setStocksCurrencyData({
          ...stocksCurrencyData,
          [stock.name]: res.data.reverse().map(item => ({ name: item.name, realValue: item.EOD, prediction: item.prediction, accuracy: item.accuracy }))
        });
      })
  };

  return (
    <div className="Finance-Charts">
      <Tabs defaultActiveKey="Tesla" onChange={(e) => !stocksCurrencyData[e] && getStock(STOCKS.filter(stock => stock.name === e)[0])}>
        {/*{STOCKS.map(stock => (
          <TabPane tab={stock.name} key={stock.name} className="Tab-Pane">
            {stocksCurrencyData[stock.name] ? (
              <ResponsiveContainer>
                <AreaChart data={stocksCurrencyData[stock.name]}>
                  <Area type="monotone" dataKey="prediction" fill="#ca4346" stroke="#ca9346"  />
                  <Area type="monotone" dataKey="realValue" stroke="#8884D8" />

                  <CartesianGrid stroke="#D6D6D6" strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis
                    domain={[
                      Math.round(Math.min(...stocksCurrencyData[stock.name].map(_ => _.realValue)) - 10),
                      Math.round(Math.max(...stocksCurrencyData[stock.name].map(_ => _.realValue)) + 10)
                    ]}
                  />

                  <Tooltip />
                  <Legend verticalAlign="top" height={36}/>
                </AreaChart>
              </ResponsiveContainer>
            ) : (
              <Spin className="Spinner" size="large" />
            )}
          </TabPane>
        ))}*/}

        <TabPane tab="Tesla" key="Tesla" className="Tab-Pane">
          {teslaStocks.length ? (
            <ResponsiveContainer>
              <LineChart data={teslaStocks}>
                <Line type="monotone" dataKey="realValue" fill="yellow"  />
                {/*<Line type="monotone" dataKey="lr" fill="green"  />*/}
                {/*<Line type="monotone" dataKey="rf" fill="blue"  />*/}
                <Line type="monotone" dataKey="gb" fill="black"  />

                <CartesianGrid stroke="#D6D6D6" strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />

                <Tooltip />
                <Legend verticalAlign="top" height={36}/>
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <Spin className="Spinner" size="large" />
          )}

        </TabPane>
      </Tabs>

      {predictionPercentage.length && (
        <Card className="Prediction-Card">
          {console.log('RERE', predictionPercentage)}
          <Table
            dataSource={predictionPercentage}
            columns={[
              {
                title: 'Start date',
                dataIndex: 'startDate',
                key: 'startDate'
              },
              {
                title: 'End date',
                dataIndex: 'endDate',
                key: 'endDate'
              },
              {
                title: 'Real change',
                dataIndex: 'realDiff',
                key: 'realDiff'
              },
              {
                title: 'Gradient Boosting prediction',
                dataIndex: 'gbDiff',
                key: 'gbDiff'
              },
              {
                title: 'GB predicted right?',
                dataIndex: 'predictedRight',
                key: 'predictedRight'
              }
            ]}
          />
        </Card>
      )}
    </div>
  );
};

export default FinanceCharts;
