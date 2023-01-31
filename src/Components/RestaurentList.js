import React, { useState, useEffect } from 'react'
import RestaurantCard from './RestaurantCard'
import Row from 'react-bootstrap/Row';



function RestaurentList() {
    const [allRestaurents, setRestaurents] = useState([])
    const getresturentdata = async () => {
        await fetch('/restaurants.json').then(data => {
            data.json().then(result => {
                setRestaurents(result.restaurants)
            })
        })
    }


    useEffect(() => {
        getresturentdata()
    }, [])


    return (
        <Row>
            {
                allRestaurents.map(item => (
                    <RestaurantCard data={item} />
                ))
            }
        </Row>
    )
}

export default RestaurentList;
