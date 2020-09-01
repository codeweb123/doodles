import React from 'react';
import { Item, Segment, Icon, List, Button } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee'

export default function EventListItem() {
    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src='/assets/user.png' />
                        <Item.Content>
                            <Item.Header content='Event Title' />
                            <Item.Description>
                                Hosted by Madi
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' /> Date
                    <Icon name='marker' /> Venue
                </span>
            </Segment>
            <Segment secondary>
                <List>
                    <EventListAttendee />
                    <EventListAttendee />
                    <EventListAttendee />
                </List>
            </Segment>
            <Segment clearing>
                <div>Description of event</div>
                <Button color='teal' floated='right' content='View' />
            </Segment>
        </Segment.Group>
    )
}