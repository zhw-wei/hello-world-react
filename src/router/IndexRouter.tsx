import React, { Component } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from '../components/sandBox/home/Home';

import Login from '../components/login/Login';
import NewsSandBox from '../components/sandBox/NewsSandBox';
import SideMenu from '../components/sandBox/sideMenu/SideMenu';
import UserManage from '../components/sandBox/user-manage/UserManage';
import RoleManage from '../components/sandBox/role-mange/RoleManage';
import RightManage from '../components/sandBox/role-mange/RightManage';



export default class IndexRouter extends Component {
  render() {
    return <>
      <HashRouter>
        <Routes>
          {/* 设置默认请求地址 */}
          <Route path='/*' element={<Navigate replace to='/login'></Navigate>}></Route>
          <Route path='/login' element={<Login />}></Route>
          {/* 使用嵌套实现组件嵌套路由 */}
          <Route path='/' element={<NewsSandBox />}>
            <Route path='home' element={<Home/>}/>
            <Route path='user-manage/list' element={<UserManage/>}/>
            <Route path='role-manage/list' element={<RoleManage/>}/>
            <Route path='right-manage/list' element={<RightManage/>}/>
          </Route>
        </Routes>
      </HashRouter>
    </>
  }
}

