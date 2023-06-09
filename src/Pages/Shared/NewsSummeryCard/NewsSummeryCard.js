import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsSummeryCard = ({ news }) => {
    const { _id, title, author, details, image_url, total_view, rating } = news;
    return (
        <div>
            <Card className="mb-5">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <div>
                            <Image
                                roundedCircle
                                src={author?.img}
                                style={{ height: "65px" }}
                            ></Image>
                        </div>
                        <div className='ms-3 mt-1'>
                            <p className='mb-0 fw-bold'>{author?.name}</p>
                            <p>{author?.published_date}</p>
                        </div>
                    </div>
                    <div>
                        <FaRegBookmark className='me-2' />
                        <FaShareAlt />
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {
                            details.length > 250 ?
                                <span>{details.slice(0, 250) + "..."} <Link to={`/news/${_id}`}>Read More</Link></span>
                                :
                                <span>{details}</span>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                    <div>
                        <FaStar className='text-warning me-2 mb-1' />
                        <span>{rating.number}</span>
                    </div>
                    <div>
                        <FaEye className='me-2 mb-1' />
                        <span>{total_view}</span>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummeryCard;