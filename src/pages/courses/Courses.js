import React from 'react';
import './Courses.css';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { Slide } from 'react-reveal';
import Zoom from 'react-reveal/Zoom';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import { NavLink } from 'react-router-dom';

const Courses = () => {

    const { courses, addToCart } = useAuth();

    return (
        <div className='allCourse'>
            <Container>
                <div className='text-center text-white pb-3'>
                    <Slide left>
                        <h1>Our All Courses</h1>
                    </Slide>
                    <Slide right>
                        <p>Here you can find our all latest courses. Choose some of them and try to grow up your skills.</p>
                    </Slide>
                </div>
                <div>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {courses.map(course => <Col key={course.key}>
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
                        )}
                    </Row>
                </div>
            </Container >
        </div >
    );
};

export default Courses;