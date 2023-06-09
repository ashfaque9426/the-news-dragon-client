import React from 'react';
import logo from '../../../../../assets/logo.png'
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";


const Header = () => {
    
    return (
        <header className='mb-5'>
            <Container className='mt-4'>
                <div className="text-center">
                    <img src={logo} alt="Logo Image" />
                    <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                    <p>{moment().format("dddd, MMMM D, YYYY")}</p>
                </div>
                <div className='d-flex border rounded-3 mb-2 px-2 py-3'>
                    <Button variant="danger">Latest</Button>
                    <Marquee className='text-dark fw-bold' pauseOnHover={true} speed={50}>
                        I can be a React component, multiple React components, or just some text.
                    </Marquee>
                </div>
                
            </Container>
        </header>
    );
};

export default Header;