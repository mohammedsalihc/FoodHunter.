import React from 'react'
import Button from 'react-bootstrap/Button';
import { Modal, ListGroup } from 'react-bootstrap';
import { useState } from 'react';

function OperatingTime({ timedata }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                operating Hours
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Operating Hours</Modal.Title>
                </Modal.Header>
                <Modal.Body><ListGroup>
                    <ListGroup.Item>Monday | {timedata.Monday}</ListGroup.Item>
                    <ListGroup.Item>Tuesday | {timedata.Tuesday}</ListGroup.Item>
                    <ListGroup.Item>Wednesday | {timedata.Wednesday}</ListGroup.Item>
                    <ListGroup.Item>Thursday | {timedata.Wednesday}</ListGroup.Item>
                    <ListGroup.Item>Friday | {timedata.Friday}</ListGroup.Item>
                    <ListGroup.Item>Saturday | {timedata.Saturday}</ListGroup.Item>
                    <ListGroup.Item>Sunday | {timedata.Sunday}</ListGroup.Item>
                </ListGroup>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default OperatingTime
