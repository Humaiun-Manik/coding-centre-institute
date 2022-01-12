import React from 'react';
import './Header.css';
import { Badge, Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from './../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { AllContexts, selectedCourses } = useAuth();
    const { user, logOut } = AllContexts;
    const { displayName, photoURL } = user;

    return (
        <Navbar className='sticky-top' bg="success" expand="lg">
            <Container>
                <Navbar.Brand className='header-logo text-white' href="#home"><img src={logo} alt="Logo" /> <span className='title'>Coding Centre Institute</span> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center menu-items">
                        <Nav.Link as={Link} className='text-white' to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} className='text-white' to="/about">About</Nav.Link>
                        <Nav.Link as={Link} className='text-white' to="/contact">Contact</Nav.Link>
                        <Nav.Link as={Link} className='text-white' to="/courses">Courses</Nav.Link>
                        <Nav.Link as={HashLink} className='text-white' to="/home#feature">Feature Courses</Nav.Link>
                        <Nav.Link as={Link} className='text-white mx-2' to="/cart"><FontAwesomeIcon icon={faShoppingCart} /><Badge className='badge'>{selectedCourses.length}</Badge></Nav.Link>
                        {!displayName ? (
                            <>
                                <Nav.Link as={Link} className='text-white' to="/signup">Sign Up</Nav.Link>
                                <Nav.Link as={Link} className='text-white' to="/login">Log In</Nav.Link>
                            </>
                        ) : (
                            <NavDropdown className='dropdown-item' title={<img src={photoURL} alt="" />}>
                                <div className='text-center'>
                                    <h6>{displayName}</h6>
                                    <Button onClick={logOut} variant="primary">Sign Out</Button>
                                </div>
                            </NavDropdown>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;