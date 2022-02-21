import { Button, Form, Input, Checkbox } from 'antd';
import { useNavigate } from 'react-router-dom';
import LoginStyple from "./Login.module.scss"

//使用rfc快捷键生成函数式组件，hooks作为react开发主要方式
//不要使用rcc快捷键生成类式组件，因为现行的很多教程、文档都把函数式作为主要讲解方向
export default function Login() {

    //路由跳转
    const navigate = useNavigate()
    const login = () => {
        //发送请求，验证账号和密码，然后跳转
        navigate("/")
    }

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return <div>
        <Form name="basic" labelCol={{ span: 8, }} wrapperCol={{ span: 16, }} initialValues={{ remember: true, }}
            onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" >
            <Form.Item label="Username" name="username"
                rules={[{ required: true, message: 'Please input your username!', },]} >
                <Input />
            </Form.Item>

            <Form.Item label="Password" name="password"
                rules={[{ required: true, message: 'Please input your password!', },]} >
                <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16, }} >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16, }} >
                <Button type="primary" htmlType="submit"> 登录 </Button>
            </Form.Item>
        </Form>
    </div>;
}
