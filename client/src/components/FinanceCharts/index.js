import React, { useState, useEffect } from 'react';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Tabs, Spin } from 'antd';
import { fetchStockData } from '../../services/api.service';

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


const FinanceCharts = () => {
  const [stocksCurrencyData, setStocksCurrencyData] = useState({});

  useEffect(() => {
    if (!stocksCurrencyData[STOCKS[0].name]) {
      fetchStockData(STOCKS[0].value)
        .then(res => res.json())
        .then((res) => {
          !stocksCurrencyData[STOCKS[0].name] && setStocksCurrencyData({
            ...stocksCurrencyData,
            [STOCKS[0].name]: res.data.reverse().map(item => ({ name: item.name, realValue: item.EOD, prediction: item.prediction, accuracy: item.accuracy }))
          });
        })
    }
  });

  const getStock = (stock) => {
    fetchStockData(stock.value)
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
      <Tabs defaultActiveKey={STOCKS[0].name} onChange={(e) => getStock(STOCKS.filter(stock => stock.name === e)[0])}>
        {STOCKS.map(stock => (
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
        ))}
      </Tabs>
    </div>
  );
};

export default FinanceCharts;
