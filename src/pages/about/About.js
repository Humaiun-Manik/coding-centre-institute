import React from 'react';
import './About.css'
import { Button, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import { Bounce, Zoom } from 'react-reveal';
import useAuth from '../../hooks/useAuth';

const About = () => {

    const { getEmail, signUp } = useAuth();

    return (
        <div className='about'>
            <Container>
                <Zoom>
                    <h2 className='text-center mb-4'>WELCOME TO CODING CENTER INSTITUTE</h2>
                </Zoom>
                <Bounce bottom>
                    <Row>
                        <Col md-5>
                            <h4>About Us</h4>
                            <p>There are countless online education marketplaces on the internet. And there’s us. We are not the biggest. We are not the cheapest. But we are the fastest growing. We have the highest course completion rate in the industry.</p>
                            <p>And the reason is, we don’t give up. When a student commits to a course, we commit to the student. We are not going to sugar coat it - we will make you complete, come what may. You may not have given much thought to what you are signing up for, but we believe you are signing up for knowledge that is useful and complete. We are ridiculously committed to our students. Be it constant reminders, relentless masters or 24 x 7 online support - we will absolutely make sure that you run out of excuses to not complete the course.</p>
                        </Col>
                        <Col>
                            <h4>Our Vision</h4>
                            <p>To become the largest online learning ecosystem for continuing education, in partnership with corporates and academia.</p>
                            <h4>Our Mission</h4>
                            <p>To create an alternate platform for students who wish to continue and complete courses by attending live online courses, using a team of ridiculously committed educators who will stop at nothing to impart education, helped by a 24 x 7 support system. By deploying our world class team of industry experts, we aim to educate our learners with the skills they need to advance their professional life to the next level.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4>Sign up for our monthly newsletter</h4>
                            <p>Be the first to know about news and updates.We never share you mail with others. Trust us!</p>
                        </Col>
                        <Col>
                            <h4>Leave your mail below</h4>
                            <InputGroup className="mb-3">
                                <FormControl
                                    id="Email"
                                    type='email'
                                    onBlur={getEmail}
                                    placeholder='Enter Your Email'
                                />
                                <Button onClick={signUp} variant="outline-primary" id="button-addon1">
                                    SIGN UP
                                </Button>
                            </InputGroup>
                        </Col>
                    </Row>
                </Bounce>
            </Container>
        </div>
    );
};

export default About;