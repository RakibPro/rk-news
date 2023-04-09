import React, { useContext } from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';
import { Button, Image } from 'react-bootstrap';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => console.error(error));
    };

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
                        <div>
                            {
                                user?.photoURL ?
                                    <Image
                                        className='mt-1 me-2'
                                        style={{ height: '30px' }}
                                        roundedCircle
                                        src={user?.photoURL}
                                    ></Image>
                                    :
                                    <FaUserAlt className='mt-2' />
                            }
                        </div>
                        <div className=' d-flex align-items-center'>
                            {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <Button className='ms-3 text-white text-decoration-none fw-bold' onClick={handleLogOut} variant="danger">LogOut</Button>
                                    </>
                                    :
                                    <>
                                        <Button className='ms-3' variant="success"><Link className='text-white text-decoration-none fw-bold' to={'/login'}>Login</Link></Button>
                                        <Button className='ms-2' variant="primary"><Link className='text-white text-decoration-none fw-bold' to={'/register'}>Register</Link></Button>
                                    </>
                            }
                        </div>
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