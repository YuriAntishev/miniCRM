import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Typography } from 'antd';

const { Title } = Typography;

const layout = {
    labelCol: {
        span: 15,
    },
    wrapperCol: {
        offset: 1,
        span: 15,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 1,
        span: 16,
    },
};

const ContactForm = (props) => {

    let current = props.current;

    useEffect(() => {
        if (current !== null) {
            setContact(current);
        } else {
            setContact({
                name: '',
                email: '',
                phone: '',
            });
        }
    }, [current]);

    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const { name, email, phone } = contact;

    const onChange = e =>
        setContact({ ...contact, [e.target.name]: e.target.value });

    const onSubmit = () => {

        if (current === null) {
            props.AddContact(contact);
        } else {
            props.UpdateContact(contact);
            props.ClearCurrent();
        }
        setContact({
            name: '',
            email: '',
            phone: '',
        });
    };

    return (
        <Form
            onFinish={onSubmit}
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
        >
            <Form.Item>
                <Title level={2}>
                    {current ? "Update Contact" : "Add Contact"}
                </Title>
            </Form.Item>
            <Form.Item>
                <Input
                    name="name"
                    type="name"
                    value={name}
                    onChange={onChange}
                    placeholder="Name"
                    minLength="3"
                    required
                />
            </Form.Item>

            <Form.Item>
                <Input
                    name="email"
                    type="email"
                    value={email}
                    onChange={onChange}
                    placeholder="Email"
                    required
                />
            </Form.Item>

            <Form.Item>
                <Input
                    name="phone"
                    value={phone}
                    onChange={onChange}
                    placeholder="Phone"
                    required
                />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button htmlType="submit">
                    {current ? "Update Contact" : "Add Contact"}
                </Button>
            </Form.Item>
        </Form>
    );
};

export default ContactForm;