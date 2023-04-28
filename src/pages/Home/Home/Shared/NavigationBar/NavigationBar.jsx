import React from 'react';
import { Button, Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../../../providers/AuthProvider';
import { useContext } from 'react';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
        .then(() => console.log("User Logged Out"))
        .catch(error => console.log(error.message))
    }

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to='/'>Home</Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav className='d-flex gap-3 align-items-center'>
                            {
                                user && <FaUserCircle style={{ fontSize: '1.5rem' }} />
                            }
                            {
                                user ?
                                    <Button onClick={handleLogout} variant="secondary">Logout</Button> :
                                    <Link to='/login'><Button variant="secondary">Login</Button></Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;