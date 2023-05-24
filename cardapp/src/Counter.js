import React, { useState } from 'react'
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Counter = () => {

    let [state, setState] = useState(0)

    const Incrment = () => {
        setState(state + 1)

        toast.success("Sucessful login", {
            position: "top-center",
            theme: "colored",
        })
    }

    return (
        <>
            <Container fluid="md" className='mt-3'>
                <Row>
                    <Col md={6}>
                        <Card style={{ width: '18rem' }} className="shadow-lg">

                            <Card.Body >
                                <p className='display-2 text-center'>{state}</p>
                                <Button variant="success" className='m-1' onClick={Incrment}>Increment</Button>
                                <Button variant="warning" className='m-1' onClick={() => setState(state - 1)}>Decrement</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={6} md={6} xl={6}>

                        <Card style={{ width: '18rem' }} className="shadow-lg">
                            <Card.Header style={{ backgroundColor: 'orange' }}>Register</Card.Header>
                            <Card.Body >
                                <Form>
                                    <Form.Group>
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group> <br />
                                    <Form.Group>
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                </Form>
                                <br />
                                <Button style={{ backgroundColor: 'orange' }}>Register</Button>

                            </Card.Body>



                        </Card>

                    </Col>

                </Row>
            </Container>

            <ToastContainer />

        </>
    )
}

export default Counter