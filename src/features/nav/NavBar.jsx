import React from 'react'
import { Menu, Container, Button } from 'semantic-ui-react';

export default function Navbar({setFormOpen}) {
    return (
        <Menu fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: 15}}/>
                    SpaceCoastDoodles
                </Menu.Item>
                <Menu.Item name='Events' />
                <Menu.Item>
                    <Button onClick={() => setFormOpen(true)} positive content='Create Event' />
                </Menu.Item>
                <Menu.Item position='right'>
                    <Button basic content='Login' />
                    <Button basic content='SignUp'  style={{marginLeft: '0.5em'}}/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}