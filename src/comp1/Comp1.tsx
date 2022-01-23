import React, { Component } from 'react'

import Weather from './Weather';
import Person from './Person';
import ShowData from './ShowData';
import Login from './Login';
import Life from './Life';

export default class Comp1 extends Component {
    render() {
        const p = { name: "王五", sex: "男", age: 22 }
        return (
            <div>
                <Weather />
                <hr />
                <Person name="张三" sex="男" age={20} />
                <Person name="李四" sex="男" age={21} />
                <Person {...p} />
                <hr />
                <ShowData />
                <hr />
                <Login />
                <hr />
                <Life />
            </div>
        )
    }
}
