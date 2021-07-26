import { Form, Input, Button, Checkbox,Image, Row, Col } from 'antd';
import logo from './de.png';
import './login.component.css';

function Login() {
    const onFinish = (values: any) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <div className="Login">
    <Row>
      <Col span={24}>
      <img src={logo} alt="logo" className="logo"/>
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <h1>Boussole Pro</h1>
      </Col>
    </Row>
     
       <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

     

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
        
      </Form.Item>
    </Form>
    </div>
  );
}

export default Login;
