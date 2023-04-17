import React from 'react';
import Header from '../pages/Home/Home/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Home/Home/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Home/Home/Shared/LeftNav/LeftNav';
import RightNav from '../pages/Home/Home/Shared/RightNav/RightNav';

const Main = () => {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav />
                    </Col>
                    <Col lg={6}>
                        <h2>Main content comming</h2>
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

export default Main;