import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';

const layout = {
    labelCol: {
        span: 10,
    },
    wrapperCol: {
        span: 4,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 10,
        span: 10,
    },
};

const LoginForm = (props) => {

    const { LoginUser, isAuthenticated } = props;

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/');
        }
    }, [isAuthenticated, props.history]);


    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const { email, password } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onFinish = () => {
        LoginUser({
            email,
            password
        });
    };

    return (
        <div>
            <div align="center">
                <p>email: <span>feodora@gmail.com</span> </p>
                <p>password: <span>feodora</span> </p>
            </div>

            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <h1 align="center">
                    Account <span className="text-primary">
                        Login
                </span>
                </h1>
                <Form.Item
                    label="Email"
                    required
                >
                    <Input
                        type='email'
                        name='email'
                        value={email}
                        onChange={onChange}
                        required
                    />
                </Form.Item>

                <Form.Item
                    label="Password"
                    required
                >
                    <Input.Password
                        id='password'
                        type='password'
                        name='password'
                        value={password}
                        onChange={onChange}
                        required
                    />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button
                        htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default withRouter(LoginForm);
