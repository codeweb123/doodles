import React, {useState} from 'react';
import EventBoard from '../../features/events/eventBoard/EventBoard';
import NavBar from '../../features/nav/NavBar';
import { Container } from 'semantic-ui-react';
//import { render } from '@testing-library/react';

export default function App() { 
  const [formOpen, setFormOpen] = useState(true); //Need state in App to pass into Navbar
    return (
      <>
        <NavBar setFormOpen={setFormOpen} />
        <Container className='main'>
        <EventBoard formOpen={formOpen} setFormOpen={setFormOpen}/>
        </Container>
      </>
    );
  }


