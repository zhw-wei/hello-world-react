import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';

import style from './SideMenu.module.scss'

const { Header, Sider, Content } = Layout;

type StateType={
    collapsed: boolean
}

export default class SideMenu extends Component <any, StateType>{

    state={collapsed: false}

    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };

    render() {
        return <div className={style.sideMenu}>
            <Sider trigger={this.toggle} collapsible collapsed={this.state.collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        nav 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                        nav 2
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined />}>
                        nav 3
                    </Menu.Item>
                    <Menu.Item key="4" icon={<UploadOutlined />}>
                        nav 4
                    </Menu.Item>
                    <Menu.Item key="5" icon={<UploadOutlined />}>
                        nav 5
                    </Menu.Item>
                    <Menu.Item key="6" icon={<UploadOutlined />}>
                        nav 6
                    </Menu.Item>
                </Menu>
            </Sider>
        </div>;
    }
}
