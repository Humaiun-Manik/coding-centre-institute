import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import useAuth from '../../hooks/useAuth';
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {

    const path = useNavigate();
    const { selectedCourses, remove, setSelectedCourses } = useAuth();
    const totalPrice = selectedCourses.reduce((total, course) => total + course.price, 0);

    return (
        <div>
            <Container>
                {selectedCourses.length ? <Row xs={1} md={2} className='my-4'>
                    {selectedCourses.map(course => <Col key={course.key} xs={12} md={8}>
                        <Row xs={1} md={2} className='my-2' style={{ backgroundColor: '#0DCAF0' }}>
                            <Col xs={12} md={5} style={{ marginLeft: '-12px' }}>
                                <img style={{ width: '300px', height: '181px' }} src={course.img} alt="" />
                            </Col>
                            <Col xs={12} md={7} className='py-2'>
                                <h5>{course.title}</h5>
                                <p className='m-0'>{course.desc}</p>
                                <h4>Price: {course.price}$</h4>
                                <Row xs={1}>
                                    <Col md={4}>
                                        <Rating className='text-warning'
                                            initialRating={course.rating}
                                            readonly
                                            emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                                            fullSymbol={<FontAwesomeIcon icon={fullStar} />}
                                        />
                                        <span>  {course.rating}</span>
                                        <p className='m-0'>Total review: {course.ratingCount}</p>
                                    </Col>
                                    <Col md={8} className='mt-2'>
                                        <NavLink to={`/course/${course.key}`} className='w-49 mx-4 btn btn-primary'>View Details</NavLink>
                                        <Button onClick={() => { remove(course.key) }}
                                            className='w-49' variant="primary">Remove</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>)}
                    <Col className='cart' xs={12} md={4} style={{ right: '30px' }}>
                        <div className='text-center'>
                            <h4>Total {selectedCourses.length} course selected</h4>
                            <h6>Total Price: {totalPrice.toFixed(2)} $</h6>
                            <Button onClick={() => {
                                alert('Thanks for purchasing');
                                localStorage.setItem('cart', JSON.stringify([]));
                                setSelectedCourses([]);
                                path('/home');
                            }}
                                className='w-49' variant="primary">Check Out</Button>
                        </div>
                    </Col>
                </Row> :
                    <div className='text-center my-5 py-5'>
                        <h1>No Course Selected!</h1>
                    </div>
                }
            </Container>
        </div>
    );
};

export default Cart;