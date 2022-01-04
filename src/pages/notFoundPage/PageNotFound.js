import React from 'react';
import './PageNotFound.css';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className='pageNotFound text-center'>
            <h1>404</h1>
            <h4>OPPS! PAGE NOT FOUND</h4>
            <p>Sorry, the page you're looking for doesn't exist. you can return to home and look for another.</p>

            <NavLink to="/home">
                <Button variant="primary">Return to Home</Button>
            </NavLink>
        </div>
    );
};

export default PageNotFound;