import React from 'react'
import { Button, Alert, Accordion, Badge, Navbar, Container } from 'react-bootstrap'
import Counter from './Counter'

const BoostrapApp = () => {
    return (
        <>

            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">ShubhamTech</Navbar.Brand>
                </Container>

            </Navbar>
            <Counter />

        </>
    )
}

export default BoostrapApp