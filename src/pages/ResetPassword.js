import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';

const ResetPassword = () => {
    const { AllContexts } = useAuth();
    const { getEmail, resetPassword, error } = AllContexts;

    return (
        <div className='text-center my-4 w-25 mx-auto'>
            <h5>Your Email Address</h5>
            <p className='text-danger'>{error}</p>
            <Form onSubmit={resetPassword} >
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
                                onBlur={getEmail}
                                type='email'
                                placeholder="Enter your email address" />
                        </InputGroup>
                        <Button className='w-100 mt-2' variant="primary" type="submit">
                            Send
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default ResetPassword;