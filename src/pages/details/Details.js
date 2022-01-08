import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';

const Details = () => {

    const { id } = useParams();
    const { courses } = useAuth();
    const matchingCourse = courses.find(course => course.key === Number(id));
    const { img, title, desc, price, rating, ratingCount } = matchingCourse;

    return (
        <div className='py-5'>
            {title ? (
                <Container>
                    <Row xs={1} md={2}>
                        <Col>
                            <img className='img-fluid w-100' src={img} alt="" />
                        </Col>
                        <Col>
                            <h2>{title}</h2>
                            <h5>{desc}</h5>
                            <h1>Price: {price}$</h1>
                            <Row className='my-4'>
                                <Col>
                                    <h5>
                                        <Rating className='text-warning'
                                            initialRating={rating}
                                            readonly
                                            emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                                            fullSymbol={<FontAwesomeIcon icon={fullStar} />}
                                        />
                                        <span>  {rating}</span>
                                    </h5>
                                </Col>
                                <Col><h5>Total review: {ratingCount}</h5></Col>
                            </Row>
                            <Button className='w-75' variant="primary">Add to Cart</Button>
                        </Col>
                    </Row>
                </Container>
            ) : <h1>No Course Found</h1>}
        </div>
    );
};

export default Details;