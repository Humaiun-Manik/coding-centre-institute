import React from 'react';
import { Button, Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const Signup = () => {
    return (
        <div className='text-center my-4'>
            <h2>Please Sign Up</h2>
            <p>Sign Up with Email & Password</p>
            <div className='w-25 mx-auto'>
                <Form >
                    <Row>
                        <Col className="my-1">
                            <Form.Label htmlFor="Username" visuallyHidden>
                                Username
                            </Form.Label>
                            <InputGroup>
                                <InputGroup.Text><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
                                <FormControl id="Username" placeholder="Enter Your Name" />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="my-1">
                            <Form.Label htmlFor="email" visuallyHidden>
                                Enter Your Email
                            </Form.Label>
                            <InputGroup>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </InputGroup.Text>
                                <FormControl id="email" placeholder="Enter Your Email Address" />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="my-1">
                            <Form.Label htmlFor="Username" visuallyHidden>
                                Enter Your Password
                            </Form.Label>
                            <InputGroup>
                                <InputGroup.Text><FontAwesomeIcon icon={faLock} /></InputGroup.Text>
                                <FormControl id="Username" placeholder="Enter Your Password" />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Button className='w-100 mt-2' variant="primary" type="submit">
                        Sign Up
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Signup;