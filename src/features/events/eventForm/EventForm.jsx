import React from 'react';
import { Segment, Header, Form } from 'semantic-ui-react';

export default function EventForm() {
    return (
        <Segment>
            <Header content='Create new event' />>
            <Form>
            <Form.field>
                <input type="text" placeholder='' />
            </Form.field>
            </Form>
        </Segment>
    )
}