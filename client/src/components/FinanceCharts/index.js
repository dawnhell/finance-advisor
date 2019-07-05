import React, { useState, useEffect } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Tabs } from 'antd';
import { fetchCurrencyData } from '../../services/api.service';

const simpleData = [
  {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
  {name: 'Page AAA', uv: 490, pv: 3400, amt: 1400},
  {name: 'Page B', uv: 340, pv: 1400, amt: 2800},
  {name: 'Page C', uv: 200, pv: 2800, amt: 2100}
];

const { TabPane } = Tabs;

const FinanceCharts = () => {
  const [currencyData, setCurrencyData] = useState([]);

  useEffect(() => {
    if (!currencyData.length) {
      fetchCurrencyData()
        .then(res => res.json())
        .then((res) => {
          console.log(res);
          res = res.map(item => ({ name: item.name, uv: item.data_symbols_count }));
          setCurrencyData(res)
        })
    }
  });

  return (
    <div className="Finance-Charts">
      <Tabs defaultActiveKey="1" onChange={(e) => console.log(e)}>
        <TabPane tab="Tab 1" key="1">
          <LineChart width={400} height={400} data={simpleData}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
          </LineChart>
        </TabPane>

        <TabPane tab="Tab 2" key="2">
          {currencyData.length && (
            <LineChart width={900} height={400} data={currencyData}>
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="name" />
              <YAxis />
            </LineChart>
          )}
        </TabPane>
      </Tabs>
    </div>
  );
};

export default FinanceCharts;
