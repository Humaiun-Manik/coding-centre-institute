import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { Bounce, Slide, Zoom } from 'react-reveal';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import './Home.css';

const Home = () => {
    const { courses, addToCart } = useAuth();

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
                        <NavLink to='/courses' className='btn btn-primary fs-5 rounded-pill px-4'>View Courses</NavLink>
                    </div>
                </Container >
            </div >
            <div id='feature' className='allCourse pt-5'>
                <Container>
                    <div className='text-center text-white pb-3 pt-5'>
                        <Slide left>
                            <h1>Our Feature Courses</h1>
                        </Slide>
                        <Slide right>
                            <p>Here you can find our all latest courses. Choose some of them and try to grow up your skills.</p>
                        </Slide>
                    </div>
                    <div>
                        <Row xs={1} md={2} lg={3} className="g-4">
                            {courses.slice(0, 6).map(course => <Col key={course.key}>
                                <Zoom>
                                    <Card>
                                        <Card.Img variant="top" src={course.img} />
                                        <Card.Body>
                                            <Card.Title>{course.title}</Card.Title>
                                            <Card.Text>{course.desc}</Card.Text>
                                            <h4>Price: ${course.price}</h4>
                                            <Card.Text>
                                                <Row className='my-4'>
                                                    <Col>
                                                        <Rating className='text-warning'
                                                            initialRating={course.rating}
                                                            readonly
                                                            emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                                                            fullSymbol={<FontAwesomeIcon icon={fullStar} />}
                                                        />
                                                        <span>  {course.rating}</span>
                                                    </Col>
                                                    <Col>Total review: {course.ratingCount}</Col>
                                                </Row>
                                            </Card.Text>
                                            <NavLink to={`/course/${course.key}`} className='detail-btn w-49 mx-4 btn btn-primary'>View Details</NavLink>
                                            <Button onClick={() => addToCart(course)}
                                                className='w-49' variant="primary">Add to Cart</Button>
                                        </Card.Body>
                                    </Card>
                                </Zoom>
                            </Col>
                            )
                            }
                        </Row>
                    </div>
                </Container >
            </div >
        </>
    );
};

export default Home;