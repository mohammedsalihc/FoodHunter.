import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Col, Placeholder } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function RestaurantCard({ data }) {

    return (
        <Col className='p-3' sm={6} md={6} lg={4} xl={3} >
            <Link style={{ textDecoration: "none" }} to={`/view-restaurants/${data.id}`}>
                <Container>
                    <Card className='mt-4 text-center' style={{ width: '100%' }}>
                        <Card.Img className="p-2" variant="top" src={data.photograph} />
                        <Card.Body>
                            <Card.Title>{data.name}</Card.Title>
                            <Card.Text>
                                {data.neighborhood}
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Container>
            </Link >
        </Col >
    )
}

export default RestaurantCard

