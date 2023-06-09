import React from 'react';
import Header from '../pages/Home/Home/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Home/Home/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Home/Home/Shared/LeftNav/LeftNav';
import RightNav from '../pages/Home/Home/Shared/RightNav/RightNav';
import NavigationBar from '../pages/Home/Home/Shared/NavigationBar/NavigationBar';

const Main = () => {
    return (
        <div>
            <Header />
            <NavigationBar />
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav />
                    </Col>
                    <Col lg={6}>
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

export default Main;