import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';

const Login = () => {

    const { signInWithGoogle } = useAuth();

    return (
        <div>
            <div className='text-center my-4'>
                <h2>Please Login</h2>
                <p>Login with Email & Password</p>
                <div className='w-25 mx-auto'>
                    <Form >
                        <Row>
                            <Col className="my-1">
                                <Form.Label htmlFor="Email" visuallyHidden>
                                    Email
                                </Form.Label>
                                <InputGroup>
                                    <InputGroup.Text>
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </InputGroup.Text>
                                    <FormControl id="Email" placeholder="Enter your email address" />
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
                                        <FontAwesomeIcon icon={faLock} />
                                    </InputGroup.Text>
                                    <FormControl id="email" placeholder="Enter Your Email Address" />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Button className='w-100 mt-2' variant="primary" type="submit">
                            Log in
                        </Button>
                    </Form>
                    <button onClick={signInWithGoogle}>google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;