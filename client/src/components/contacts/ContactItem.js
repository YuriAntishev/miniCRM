import React from 'react';
import 'antd/dist/antd.css';
import { Card, Col, Button } from 'antd';

const ContactItem = (props) => {

    const onDelete = () => {
        props.DeleteContact(props.contact.id);
        props.ClearCurrent();
    }

    return (
        <Col span={8}>
            <Card title={props.contact.name} bordered={false}>
                <p>{props.contact.email}</p>
                <p>{props.contact.phone}</p>
                <Button onClick={onDelete}>Delete</Button>
                <Button onClick={() => props.SetCurrent(props.contact)}>Edit</Button>
            </Card>
        </Col>
    );
};

export default ContactItem;