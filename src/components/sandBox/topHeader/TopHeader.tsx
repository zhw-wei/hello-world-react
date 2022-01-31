import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

export default class TopHeader extends Component {
    render() {
        return <>
        <Header className="site-layout-background" style={{ padding: 0 }}>
            <MenuFoldOutlined/>
          </Header>
        </>;
    }
}
