import { Button, Form, Input, Checkbox } from 'antd';
import { useNavigate } from 'react-router-dom';
import LoginStyple from "./Login.module.scss"

type UserInfo = {
    username: string
    password: string
    remember?: boolean
}

//使用rfc快捷键生成函数式组件，hooks作为react开发主要方式
//不要使用rcc快捷键生成类式组件，因为现行的很多教程、文档都把函数式作为主要讲解方向
export default function Login() {

    //路由跳转
    const navigate = useNavigate()

    const user01: UserInfo = {
        username: "test01",
        password: "test01"
    }

    const user02: UserInfo = {
        username: "test02",
        password: "test02"
    }

    const onFinish = (values: UserInfo) => {
        console.log('Success:', values);

        const { username, password } = values
        console.log(username == user01.username)
        console.log(password == user01.password)

        //账号密码正确，登陆跳转
        if ((username == user01.username && password == user01.password)
            || (username == user02.username && password == user02.password)) {
                navigate("/")
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return <div className={LoginStyple.pagesLogin}>
        <Form name="basic" labelCol={{ span: 8, }} wrapperCol={{ span: 16, }} initialValues={{ remember: true, }}
            onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" >
            <Form.Item label="用户名" name="username"
                rules={[{ required: true, message: '请输入正确的用户名!', },]} >
                <Input />
            </Form.Item>

            <Form.Item label="密  码" name="password"
                rules={[{ required: true, message: '请输入正确的密码!', },]} >
                <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16, }} >
                <Checkbox>记住登录名</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16, }} >
                <Button type="primary" htmlType="submit"> 登录 </Button>
            </Form.Item>
        </Form>
    </div>;
}
