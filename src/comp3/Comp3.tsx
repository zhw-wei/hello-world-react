import React, { Component } from 'react'
import { Route, Link, Routes } from 'react-router-dom'

import About from './About/About'
import Home from './Home/Home'

export default class Comp3 extends Component {
    render() {
        return (
            <div>
                <div>
                    <h2>React Router Demo</h2>
                    {/* 
                    在React中，靠路由链接实现组件切换——编写路由链接 
                    导航区a标签改为Link标签
                    */}
                    <Link to='/about'>About</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to='/home'>Home</Link>
                </div>

                <div>
                    {/* 
                    注册路由 
                    展示区改为Route标签进行路径的匹配
                    */}
                    <h2>hello world</h2>
                    <Routes>
                        {/* react-router-dom升级到6之后，一些属性发生了变化，有些参数已经不适用 */}
                        <Route path='/about' element={<About/>} />
                        <Route path='/home' element={<Home/>} />
                    </Routes>

                </div>
            </div>
        )
    }
}
