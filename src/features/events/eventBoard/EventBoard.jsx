import React, {useState} from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
import {sampleData} from '../../../app/api/sampleData';
//import EventForm from './EventForm'; 

export default function EventBoard({formOpen, setFormOpen}) {
    const [events, setEvents] = useState(sampleData);
    //state variable is events, setEvents is a function 
    //useState is a Hook

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events={events} />
            </Grid.Column>
            <Grid.Column width={6}>
                form should go here
            </Grid.Column>
        </Grid>
    )
}

//state variable = {events}
//{formOpen &&
//<EventForm setFormOpen={setFormOpen} setEvents={setEvents} />}
