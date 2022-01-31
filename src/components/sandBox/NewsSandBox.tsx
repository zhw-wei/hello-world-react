import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout, Menu } from 'antd';


import SideMenu from './sideMenu/SideMenu';
import TopHeader from './topHeader/TopHeader';

export default class NewSandBox extends Component {
  render() {
    return <>
      <Layout>
        <SideMenu />
        <Layout className='site-layout'>
          <TopHeader />
        </Layout>
      </Layout>

      <Outlet />
    </>
  }
}
