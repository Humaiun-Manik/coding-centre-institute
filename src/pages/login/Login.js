import './Login.css';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import google from './../../assets/images/google.png';
import gitHub from './../../assets/images/gitHub.png';
import { NavLink, useLocation } from 'react-router-dom';

const Login = () => {

    const location = useLocation();
    const redirect = location?.state?.from?.pathname || '/home';
    const { AllContexts } = useAuth();
    const {
        signInWithGoogle,
        signInWithGitHub,
        signInWithEmail,
        error,
        getEmail,
        getPassword
    } = AllContexts;

    return (
        <div>
            <div className='text-center my-4'>
                <h2>Please Login</h2>
                <p>Login with Email & Password</p>
                <p className='text-danger'>{error}</p>
                <div className='w-25 mx-auto'>
                    <Form onSubmit={signInWithEmail} >
                        <Row>
                            <Col className="my-1">
                                <Form.Label htmlFor="Email" visuallyHidden>
                                    Email
                                </Form.Label>
                                <InputGroup>
                                    <InputGroup.Text>
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </InputGroup.Text>
                                    <FormControl
                                        id="Email"
                                        type='email'
                                        onBlur={getEmail}
                                        placeholder="Enter your email address" />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="my-1">
                                <Form.Label htmlFor="password" visuallyHidden>
                                    Enter your password
                                </Form.Label>
                                <InputGroup>
                                    <InputGroup.Text>
                                        <FontAwesomeIcon icon={faLock} />
                                    </InputGroup.Text>
                                    <FormControl
                                        id="password"
                                        type="password"
                                        onBlur={getPassword}
                                        placeholder="Enter your password" />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Button onClick={() => { signInWithEmail(redirect) }} className='w-100 mt-2' variant="primary" type="submit">
                            Log in
                        </Button>
                    </Form>
                </div>
                <div>
                    <p className='mt-3 mb-0 pb-0'>
                        <NavLink className='text-decoration-none' to='/signup'>
                            Need an Account? Please Sign up!
                        </NavLink>
                    </p>
                    <p className='mb-0 pb-0'>
                        <NavLink className='text-decoration-none' to='/resetPassword'>
                            Forget password? Reset!
                        </NavLink>
                    </p>
                    <p className='mb-0 pb-0'>Or</p>
                    <p className='mb-0 pb-0'>Login with</p>
                </div>
                <button className='google-btn' onClick={() => { signInWithGoogle(redirect) }}>
                    <img src={google} alt="google" />
                </button>
                <button className='gitHub-btn' onClick={() => { signInWithGitHub(redirect) }}>
                    <img src={gitHub} alt="gitHub" />
                </button>
            </div>
        </div>
    );
};

export default Login;