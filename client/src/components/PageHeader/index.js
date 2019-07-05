import React from 'react';
import { Layout, Menu } from 'antd';

import './styles.scss';

const { Header } = Layout;

const PageHeader = () => {
  return (
    <Header className="Page-Header">
      <div className="logo">FA</div>

      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
  );
};

export default PageHeader;
