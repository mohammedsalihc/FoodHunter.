import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/Row"
import { Image, Button, Container } from "react-bootstrap"
import OperatingTime from './OperatingTime';
import Reviews from './Reviews';

function ViewRest() {
    const [allrestaurants, setRestaurents] = useState([])
    const params = useParams()
    const getresturentdata = async () => {
        await fetch('/restaurants.json').then(data => {
            data.json().then(result => {
                setRestaurents(result.restaurants)
            })
        })
    }

    const restData = allrestaurants.find(item => item.id == params.id)
    console.log(restData)
    useEffect(() => {
        getresturentdata()
    }, [])
    return (
        <>
            {restData ? (
                <Row>
                    <Col >
                        <Image className="p-5" src={restData.photograph} fluid ></Image>

                    </Col>
                    <Col >
                        
                            <h1>{restData.name}</h1>
                            <h2>{restData.neighborhood}</h2>
                            <h3>cusine type: {restData.cuisine_type}</h3>
                            <h4>address:{restData.address}</h4>
                            <OperatingTime timedata={restData.operating_hours} /><br />
                            <Reviews reviewData={restData.reviews} />
                       
                    </Col>
                </Row>



            ) : "null"
            }
        </>
    )
}

export default ViewRest
