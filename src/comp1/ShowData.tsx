import React from 'react';

type StateType = {}
type PropsType = {}

/**
 * 回调函数创建ref事件
 */
class ShowData extends React.Component<PropsType, StateType> {

    //声明绑定事件
    input1: HTMLInputElement | null | undefined;
    input2: HTMLInputElement | null | undefined;
    input3 = React.createRef<HTMLInputElement>()    //此种形式是react推荐的形式

    //调用函数，触法事件
    showData = () => {
        const input1 = this.input1
        alert(input1?.value)
    }

    showData2 = () => {
        const input2 = this.input2
        alert(input2?.value)
    }

    showData3 = () => {
        alert(this.input3.current?.value)
    }

    bindInput2 = (node: HTMLInputElement) => {
        this.input2 = node
    }

    render(): React.ReactNode {
        return <>
            <div>
                <input type="text" placeholder='点击按钮提示数据' ref={(node) => { this.input1 = node }} onBlur={this.showData}/> &nbsp;
                <input type="text" placeholder='点击失去焦点数据' ref={this.bindInput2} onBlur={this.showData2} /> &nbsp;
                <input type="text" placeholder='点击失去焦点数据2' ref={this.input3} onBlur={this.showData3} /> &nbsp;
            </div>
        </>
    }
}

export default ShowData;