import React from 'react';
import EventBoard from '../../features/events/eventBoard/EventBoard';
import NavBar from '../../features/nav/NavBar';
import { Container } from 'semantic-ui-react';


export default function App() {
  return (
    <>
      <NavBar />
      
      <Container className='main'>
      <EventBoard />
      </Container>
    </>
  );
}
