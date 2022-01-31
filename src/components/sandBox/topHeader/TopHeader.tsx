import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

import style from './TopHeader.module.scss'

const { Header, Sider, Content } = Layout;

export default class TopHeader extends Component {
    render() {
        return <div className={style.topHeader}>
        <Header className="site-layout-background" style={{ padding: 0 }}>
            <MenuFoldOutlined/>
          </Header>
        </div>;
    }
}
