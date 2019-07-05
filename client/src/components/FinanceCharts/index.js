import React from 'react';
import { LineChart, Line } from 'recharts';
import { Tabs } from 'antd';

const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},
{name: 'Page AAA', uv: 490, pv: 3400, amt: 1400},
{name: 'Page B', uv: 340, pv: 1400, amt: 2800},
{name: 'Page C', uv: 200, pv: 2800, amt: 2100}
];

const { TabPane } = Tabs;

const FinanceCharts = () => {
  return (
    <div className="Finance-Charts">
      <Tabs defaultActiveKey="1" onChange={(e) => console.log(e)}>
        <TabPane tab="Tab 1" key="1">
          <LineChart width={400} height={400} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          </LineChart>
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  );
};

export default FinanceCharts;
