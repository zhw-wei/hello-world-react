import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Style from './NewSandBox.module.scss'


import SideMenu from './sideMenu/SideMenu';
import TopHeader from './topHeader/TopHeader';

export default class NewSandBox extends Component {
  render() {
    return <div className={Style.sandBox}>
      <Layout>
        <SideMenu />
        <Layout className='site-layout'>
          <TopHeader />
          <Outlet />
        </Layout>
      </Layout>

    </div>
  }
}
