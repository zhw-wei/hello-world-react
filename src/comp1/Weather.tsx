import React from 'react';

//定义对象类型
type PropsType = {}

type StateType = {
    isHot: boolean
}

//继承范型
class Weather extends React.Component<PropsType, StateType>{

    //state属性
    state = {isHot: true};

    //自定义函数，箭头函数绑定this
    changeWeather = () =>{
        const isHot = this.state.isHot;
        this.setState({isHot: !isHot});
    }

    render(): React.ReactNode {
        return <>
            <h2 onClick={this.changeWeather}>今天天气很 {this.state.isHot ? "炎热" : "凉爽" }</h2>
        </>
    }

}

export default Weather;