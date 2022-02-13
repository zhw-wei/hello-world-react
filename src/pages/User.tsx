import React, { Component } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

function User() {
    //获取路径参数
    const [params, _] = useSearchParams()

    //路径：/user?hello=aa&world=bb
    console.log(params.get("hello"))
    console.log(params.get("world"))

    return <div>
        User
        <ul>
            <li><Link to={"/user/detail/1"}>用户1</Link></li>
            <li><Link to={"/user/detail/2"}>用户2</Link></li>
            <li><Link to={"/user/detail/3"}>用户3</Link></li>
            <li><Link to={"/user/detail/4"}>用户4</Link></li>
            <li><Link to={"/user/detail/5"}>用户5</Link></li>
            <li><Link to={"/user/detail/6"}>用户6</Link></li>
        </ul>
    </div>;

}

export default User;

