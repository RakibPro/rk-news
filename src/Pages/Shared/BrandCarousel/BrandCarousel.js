import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import icon1 from '../../../assets/images/icon1.jpg';
import icon2 from '../../../assets/images/icon2.jpg';

const BrandCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={icon1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={icon2}
                    alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default BrandCarousel;