import React from 'react';
import Header from '../pages/Home/Home/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Home/Home/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../pages/Home/Home/Shared/RightNav/RightNav';

const NewsLayout = () => {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col lg={9}>
                        <Outlet />
                    </Col>
                    <Col lg={3}>
                        <RightNav />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default NewsLayout;