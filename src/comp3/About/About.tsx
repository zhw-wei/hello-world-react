import React, { Component } from 'react'

//必须要使用module.css后缀，否则无法import引入
import style from './About.module.scss'

export default class About extends Component {
    render() {
        return (
            <div className={style.copm3_about}>
                
                <h2>hello world about</h2>
            </div>
        )
    }
}
