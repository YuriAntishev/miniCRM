import React from 'react';
import ContactItem from '../contacts/ContactItem';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';

const Contacts = (props) => {
    return (
        <Row>
            <Col span={12}>
                <ContactForm
                    current={props.current}
                    AddContact={props.AddContact}
                    UpdateContact={props.UpdateContact}
                    ClearCurrent={props.ClearCurrent}
                />
            </Col>
            <Col span={12}>
                <ContactFilter
                    filtered={props.filtered}
                    FilterContact={props.FilterContact}
                    ClearFilter={props.ClearFilter}
                />
                <div className="site-card-wrapper">
                    <Row gutter={16}>
                        {props.filtered !== null
                            ? props.filtered.map(contact => (
                                <ContactItem
                                    key={contact.id}
                                    DeleteContact={props.DeleteContact}
                                    SetCurrent={props.SetCurrent}
                                    ClearCurrent={props.ClearCurrent}
                                    contact={contact} />
                            ))
                            : props.post_contacts.map(contact => (
                                <ContactItem
                                    key={contact.id}
                                    DeleteContact={props.DeleteContact}
                                    SetCurrent={props.SetCurrent}
                                    ClearCurrent={props.ClearCurrent}
                                    contact={contact} />
                            ))}
                    </Row>
                </div>
            </Col>
        </Row>
    );
};

export default Contacts;