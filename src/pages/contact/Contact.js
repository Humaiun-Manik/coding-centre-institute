import React from 'react';
import './Contact.css';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { Bounce, Slide } from 'react-reveal';

const Contact = () => {
    return (
        <div className='contactUs'>
            <Container>
                <div className="text-center">
                    <Bounce left>
                        <h3>Contact Us</h3>
                    </Bounce>
                    <Bounce right>
                        <p className='mb-4'>You can easily reach us through filling up the form</p>
                    </Bounce>
                </div>
                <Slide bottom>
                    <Row>
                        <Col>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control className='inputBg' type="name" placeholder="Enter Your Name" />
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control className='inputBg' type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                        </Col>
                        <Form.Group className="mb-3">
                            <Form.Control className='inputBg' type="name" placeholder="Write Your Subject..." />
                        </Form.Group>
                        <Form.Label>Your Messages</Form.Label>
                        <FloatingLabel label="Writh your messages...">
                            <Form.Control
                                className='inputBg'
                                as="textarea"

                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                        <Button className='submitBtn' variant="primary" type="submit">
                            Submit
                        </Button>
                    </Row>
                </Slide>
            </Container>
        </div>
    );
};

export default Contact;