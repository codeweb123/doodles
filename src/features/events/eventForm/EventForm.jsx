import React from 'react';
import { Segment, Header, Form, Button } from 'semantic-ui-react';

export default function EventForm() {
    return (
        <Segment clearing>
            <Header content='Create new event' />
            <Form>
            <Form.field>
                <input type="text" placeholder='Event title' />
            </Form.field>
            <Form.field>
                <input type="text" placeholder='Cat' />
            </Form.field>
            <Form.field>
                <input type="text" placeholder='Descr' />
            </Form.field>
            <Form.field>
                <input type="text" placeholder='City' />
            </Form.field>
            <Form.field>
                <input type="text" placeholder='Location' />
            </Form.field>
            <Form.field>
                <input type="date" placeholder='Date' />
            </Form.field>
            <Button type='submit' floated='right' positive content='Submit' />
            <Button type='submit' floated='right' content='Cancel' />
            </Form>
        </Segment>
    );
}