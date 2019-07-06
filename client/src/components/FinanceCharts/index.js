import React, { useState, useEffect } from 'react';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Tabs, Spin } from 'antd';
import { fetchStockData } from '../../services/api.service';

import './styles.scss';

const { TabPane } = Tabs;

const STOCKS = [
  { name: 'Apple Inc.', value: 'AAPL' },
  { name: 'Microsoft', value: 'MSFT' },
  { name: 'Alphabet', value: 'GOOGL' },
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
            [STOCKS[0].name]: res.data.map(item => ({ name: item.Date, uv: item.EOD, prediction: item.prediction }))
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
          [stock.name]: res.data.map(item => ({ name: item.Date, uv: item.EOD, prediction: item.prediction }))
        });
      })
  };

  return (
    <div className="Finance-Charts">
      <Tabs defaultActiveKey={STOCKS[0].name} onChange={(e) => getStock(STOCKS.filter(stock => stock.name === e)[0])}>
        {STOCKS.map(stock => (
          <TabPane tab={stock.name} key={stock.name} className="Tab-Pane">
            {stocksCurrencyData[stock.name] ? (
              <AreaChart width={900} height={400} data={stocksCurrencyData[stock.name]}>
                <Area type="monotone" dataKey="prediction" fill="#ca4346" stroke="#ca9346"  />
                <Area type="monotone" dataKey="uv" stroke="#8884D8" />

                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
              </AreaChart>
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
