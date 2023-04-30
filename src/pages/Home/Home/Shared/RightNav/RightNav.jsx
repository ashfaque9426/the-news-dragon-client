import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4 className='mt-4 mb-3'>Log in with</h4>
            <div>
                <Button className='mb-2 w-100' variant="outline-primary"><FaGoogle className='me-2' /> Login With Google</Button>
                <Button variant="outline-secondary w-100"><FaGithub className='me-2' />Login With Github</Button>
            </div>
            <div className='mt-4'>
                <h4 className='mt-4'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook className='me-2' />Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter className='me-2' />Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram className='me-2' />Instagram</ListGroup.Item>
                </ListGroup>
                <QZone />
                <div className='position-relative'>
                    <img src={bg} alt="add background" />
                    <div className='position-absolute top-0 left-0 bottom-0 right-0 d-flex flex-column gap-3 px-5 justify-content-center align-items-center text-light text-center'>
                        <h4>Create an Amazing Newspaper</h4>
                        <p>
                            Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
                        </p>
                        <Button className='bg-danger'>Learn More</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightNav;