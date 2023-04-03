import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaTwitch, } from "react-icons/fa";
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    return (
        <div className='mt-3'>
            <ButtonGroup vertical>
                <Button className='mb-2' variant="outline-primary"><FaGoogle /> Login with Google</Button>
                <Button variant="outline-dark"><FaGithub /> Login with GitHub</Button>
            </ButtonGroup>
            <div className='mt-3'>
                <h2>Find Us On</h2>
                <ListGroup className='mt-4'>
                    <ListGroup.Item className='mb-2'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp /> WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch /> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2'>Terms and Condition</ListGroup.Item>
                </ListGroup>
            </div>
            <div className='mt-2 mb-3'>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;