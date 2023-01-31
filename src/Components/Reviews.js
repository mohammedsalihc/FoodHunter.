
import { Collapse, Button, Card, Container, Col } from 'react-bootstrap';
import React, { useState } from 'react';

function Reviews({ reviewData }) {
    const [open, setOpen] = useState(false);
    return (
        <>

            <Button className="mt-3"
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                customer reviews
            </Button>
            <div style={{ minHeight: '150px' }}>
                <Collapse in={open} dimension="width">
                    <div id="example-collapse-text">

                        {reviewData.map(data => (
                            <Card className='mt-2' body style={{ width: '600px' }}>
                                <h3>{data.name} </h3>
                                <h5>{data.date}</h5>
                                <h6 className='text-primary'>{data.rating}</h6>
                                <h6> {data.comments}</h6>
                            </Card>


                        ))}

                    </div>
                </Collapse>
            </div >

        </>



    )
}

export default Reviews
