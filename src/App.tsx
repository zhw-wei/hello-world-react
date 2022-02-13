import './App.css';

import { Routes, Route, useRoutes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import AppLayout from './pages/AppLayout';
import User from './pages/User';
import Detail from './pages/Detail';
import router from './router/Router';
import { Suspense } from 'react';


function App() {
  /* 调用集中式路由管理 */
  return useRoutes(router)

  /**
   * 组件嵌套，AppLayout作为外部嵌套组件，内部嵌套组件作为外部嵌套组件的内容，
    内容位置在外部组件的<Outlet/>中, 多个Outlet会重复展示组件
   */
  /*
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path={"/user/detail/:id"} element={<Detail />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
  */
}

export default App;
