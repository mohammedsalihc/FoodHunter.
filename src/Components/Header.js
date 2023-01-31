import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Food_Network_New_Logo.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        FOOD HUNTER.
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
