import React from 'react';

type PropsStyle = {}
type StateStyle = {
    opacity: number
    time: Date
}

class Life extends React.Component<PropsStyle, StateStyle>{

    state = { opacity: 1, time: new Date() }

    lifeChange = () => {
        console.log("life change")
        //定时器，定时修改透明度参数
        setInterval(
            //定时器事件
            () => {
                let { opacity } = this.state
                opacity -= 0.1
                if (opacity < 0) opacity = 1
                this.setState({ opacity: opacity, time: new Date() })
            },
            //定时器事件执行间隔时间
            200);
    }

    //react钩子函数，组件挂载完成后调用，且只调用一次
    componentDidMount() {
        //自动调用定时器
        this.lifeChange()
    }

    render(): React.ReactNode {
        console.log("render")
        return <>
            <div>
                <h2 style={{ opacity: this.state.opacity }}>即将隐藏的内容</h2>
                <button onClick={this.lifeChange}>点击隐藏</button>
                <span>现在是: {this.state.time.toTimeString()}</span>
            </div>
        </>
    }
}

export default Life;