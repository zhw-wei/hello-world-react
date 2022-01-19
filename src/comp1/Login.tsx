import React from 'react';

type PropsType = {}
type StateType = {
    username: string
    password: string
}

class Login extends React.Component<PropsType, StateType>{

    handleSubmit = () => {

        alert(`username: ${this.state.username}, password: ${this.state.password}`)
    }

    render(): React.ReactNode {
        return <>
        <div>
            <form action='www.baidu.com' onSubmit={this.handleSubmit}>
                用户名: <input type="text" onChange={node => this.setState({username: node.currentTarget.value})}/>
                密 码: <input type="password" onChange={node => this.setState({password: node.currentTarget.value})}/>
                <button>登陆</button>
            </form>
        </div>
        
        </>
    }
}

export default Login;