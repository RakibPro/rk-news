import React, { useContext } from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';
import { Image } from 'react-bootstrap';

const Header = () => {
    const { user } = useContext(AuthContext);
    return (
        <Navbar collapseOnSelect expand="lg" bg="light`" variant="light">
            <Container>
                <Navbar.Brand><Link to={"/"} className='text-decoration-none'>
                    <span className='bg-primary text-white ps-2 pe-2 pb-1 me-1 rounded'>RK</span>
                    <span>News</span></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">All News</Nav.Link>
                        <Nav.Link href="#contact">Contact Us</Nav.Link>
                        <Nav.Link href="#about">About Us</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#user">{user?.displayName}</Nav.Link>
                        <Nav.Link eventKey={2} href="#">
                            {
                                user?.photoURL ?
                                    <Image
                                        style={{ height: '30px' }} roundedCircle
                                        src={user?.photoURL}
                                    ></Image>
                                    :
                                    <FaUserAlt />
                            }
                        </Nav.Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;