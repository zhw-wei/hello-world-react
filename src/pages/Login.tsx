import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

//使用rfc快捷键生成函数式组件，hooks作为react开发主要方式
//不要使用rcc快捷键生成类式组件，因为现行的很多教程、文档都把函数式作为主要讲解方向
export default function Login() {

    //路由跳转
    const navigate = useNavigate()
    const login = ()=>{
        navigate("/")
    }
    return <div>
        <Button type="primary" onClick={login}>登陆</Button>
    </div>

}
