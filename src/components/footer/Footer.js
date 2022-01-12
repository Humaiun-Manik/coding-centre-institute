import React from 'react';
import './Footer.css';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import logo from './../../assets/images/logo.png';
import payment from './../../assets/images/payment.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className='footer-logo text-center'>
                            <img src={logo} alt="" />
                            <h3>Coding Centre</h3>
                        </div>
                        <ul className='list-unstyled'>
                            <li>
                                <FontAwesomeIcon className='fs-5 mx-2' icon={faMapMarkerAlt} />
                                <span className='fs-5'>Palashbari, Gaibandha, Bangladesh</span>
                            </li>
                            <li>
                                <FontAwesomeIcon className='fs-5 mx-2' icon={faEnvelope} />
                                <span className='fs-5'>Official: humaiunkobirr@gmail.com</span>
                            </li>
                            <li>
                                <FontAwesomeIcon className='fs-5 mx-2' icon={faPhone} />
                                <span className='fs-5'>Helpline: 01774446071(Available:10:00AM to 10.00PM)</span>
                            </li>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <ul className='list-unstyled footer-link'>
                            <li>
                                <NavLink to='/home'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/about'>About us</NavLink>
                            </li>
                            <li>
                                <NavLink to='/contact'>Contact us</NavLink>
                            </li>
                            <li>
                                <NavLink to='/courses'>Courses</NavLink>
                            </li>
                            <li>
                                <NavLink to='/policy'>Policy</NavLink>
                            </li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <img className='img-fluid' src={payment} alt="payment methods" />
                    </Col>
                </Row>
                <div>

                </div>
            </Container>
            <hr className='p-1' />
            <p className='text-center pb-4'>Copyright © All Reserved by Coding Centre pro - programming Community in 2022</p>
        </div>
    );
};

export default Footer;