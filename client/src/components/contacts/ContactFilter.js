import React, { useRef, useEffect } from 'react';

const ContactFilter = (props) => {

    const { filtered, FilterContact, ClearFilter } = props;

    const text = useRef('');

    useEffect(() => {
        if (filtered === null) {
            text.current.value = '';
        }
    })

    const onChange = e => {
        if (text.current.value !== '') {
            FilterContact(e.target.value);
        } else {
            ClearFilter();
        }
    }

    return (
        <div>
            <input
                ref={text}
                type="text"
                placeholder="Search Contacts..."
                onChange={onChange}
            />
        </div>
    );
};

export default ContactFilter;