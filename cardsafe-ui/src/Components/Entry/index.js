import React from 'react'; 
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo_CardSafe_Black.png';

import './entry.css';
/*
Stateless entry component for th web app. 
*/
const Entry = () => {
    return (
        <section>
            <header> 
                <Row align="right">
                    <Col>
                        <Button variant="dark" className="button-group">
                            <Link to='/login' className="link-button-group">
                                SIGN IN
                            </Link>
                        </Button>
                    </Col>
                </Row>
            </header> 
            <Container>
                <Row>
                    <Col className="logo-container-general">
                        <img src={logo} alt="logo" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="dark" className="button-group">
                            <Link to='/signup' className="link-button-group">
                                GET CARD
                            </Link>
                        </Button>
                    </Col>
                </Row>
            </Container>
            <footer>
                <Row align="middle">
                    <Col>
                        Just Launched on Kickstarter.
                    </Col>
                    <Col>
                        Just Launched on Kickstarter.
                    </Col>
                    <Col>
                        Just Launched on Kickstarter.
                    </Col>                   
                </Row>
            </footer>
        </section> 
    )
}


export default Entry; 