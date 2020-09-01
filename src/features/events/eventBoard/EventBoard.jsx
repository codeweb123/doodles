import React from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
//import EventForm from '../../features/events/eventForm/EventForm';
import {sampleData} from '../../../app/api/sampleData';

export default function EventBoard() {
    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events={sampleData} />
            </Grid.Column>
            <Grid.Column width={6}>
                
            </Grid.Column>
        </Grid>
    )
}
