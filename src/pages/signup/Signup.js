import React from 'react';
import { Button, Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faLink } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Signup = () => {
    const { AllContexts } = useAuth();
    const {
        signUp,
        getName,
        getEmail,
        getPassword,
        getPhotoURL,
        error
    } = AllContexts;

    return (
        <div className='text-center my-4'>
            <h2>Please Sign Up</h2>
            <p>Sign Up with Email & Password</p>
            <p className='text-danger'>{error}</p>
            <div className='w-25 mx-auto'>
                <Form onSubmit={signUp}>
                    <Row>
                        <Col className="my-1">
                            <Form.Label htmlFor="Username" visuallyHidden>
                                Username
                            </Form.Label>
                            <InputGroup>
                                <InputGroup.Text><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
                                <FormControl
                                    required
                                    id="Username"
                                    onBlur={getName}
                                    placeholder="Enter Your Name" />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="my-1">
                            <Form.Label htmlFor="email" visuallyHidden>
                                Your Email
                            </Form.Label>
                            <InputGroup>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </InputGroup.Text>
                                <FormControl
                                    required
                                    id="email"
                                    type='email'
                                    autoComplete='current-email'
                                    onBlur={getEmail}
                                    placeholder="Enter Your Email Address" />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="my-1">
                            <Form.Label htmlFor="password" visuallyHidden>
                                Your Password
                            </Form.Label>
                            <InputGroup>
                                <InputGroup.Text><FontAwesomeIcon icon={faLock} /></InputGroup.Text>
                                <FormControl
                                    required
                                    id="password"
                                    autoComplete='current-password'
                                    type='password'
                                    onBlur={getPassword}
                                    placeholder="Enter Your Password" />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="my-1">
                            <Form.Label htmlFor="text" visuallyHidden>
                                Your photo url
                            </Form.Label>
                            <InputGroup>
                                <InputGroup.Text><FontAwesomeIcon icon={faLink} /></InputGroup.Text>
                                <FormControl
                                    required
                                    id="text"
                                    autoComplete='current-text'
                                    type='text'
                                    onBlur={getPhotoURL}
                                    placeholder="Enter Valid Photo URL" />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Button className='w-100 mt-2' variant="primary" type="submit">
                        Sign Up
                    </Button>
                </Form>
            </div>
            <p className='mt-3 mb-0 pb-0'>
                <NavLink className='text-decoration-none' to='/login'>
                    Already have an account? Please login!
                </NavLink>
            </p>
        </div>
    );
};

export default Signup;