import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import SideMenu from './sideMenu/SideMenu';
import TopHeader from './topHeader/TopHeader';

export default class NewSandBox extends Component {
  render() {
      return <>
        <SideMenu/>
        <TopHeader/>
        <Outlet/>
      </>
  }
}
