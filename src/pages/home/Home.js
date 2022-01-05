import React from 'react';
import { Container } from 'react-bootstrap';
import { Bounce } from 'react-reveal';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Home.css';

const Home = () => {
    const { courses } = useAuth();

    return (
        <>
            <div className='hero-section'>
                <Container>
                    <div className='text-white text-center'>
                        <Bounce left cascade>
                            <h1 className='my-3'>Learn to be creative</h1>
                        </Bounce>
                        <Bounce right cascade>
                            <p>Learn exciting technologies from web development, design, game development and more!</p>
                        </Bounce>
                        <NavLink to='courses' className='btn btn-primary fs-5 rounded-pill px-4'>View Courses</NavLink>
                    </div>
                </Container >
            </div >
            <div>
                <h2>{courses.length}</h2>
            </div>
        </>
    );
};

export default Home;