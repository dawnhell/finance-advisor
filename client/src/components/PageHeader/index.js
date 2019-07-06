import React from 'react';
import { Layout, Menu } from 'antd';

import './styles.scss';

const { Header } = Layout;

const PageHeader = () => {
  return (
    <Header className="Page-Header">
      <div className="logo">FA</div>
    </Header>
  );
};

export default PageHeader;
