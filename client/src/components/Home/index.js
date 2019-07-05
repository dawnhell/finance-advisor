import React from 'react';
import { Layout, Card } from 'antd';

import PageHeader from '../PageHeader';
import FinanceCharts from '../FinanceCharts';

import './styles.scss';

const { Content } = Layout;

const Home = () => {

  return (
    <Layout className="Home">
      <PageHeader />

      <Content className="Content">
        <Card title="Currency dashboard" bordered={false}>
          <FinanceCharts />
        </Card>
      </Content>
    </Layout>
  );
};

export default Home;
