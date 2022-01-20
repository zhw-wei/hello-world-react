import React from 'react';

type PropsType={
    name: string
    readonly sex: string
    age ?: number
}

type StateType={ }

class Persion extends React.Component<PropsType, StateType>{
    render(): React.ReactNode {
        const {name, age, sex} = this.props
        return <>
            <ul>
                <li>姓名: {name}</li>
                <li>性别: {sex}</li>
                <li>年龄: {age}</li>
            </ul>
        </>
    }
}

export default Persion;