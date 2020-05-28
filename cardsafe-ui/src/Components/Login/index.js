import React from 'react'; 
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import logo from '../../images/Logo_CardSafe_Black.png';

import './login.css'; 

const Login = () => {
    return (
        <section>
            <header> 
                <Row align="right">
                    <Col>
                        <Button variant="dark" className="button-group">
                            <Link to='/' className="link-button-group">
                                BACK HOME
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
                    <Form>
                        <Form.Group controlId="addressInfoForm">
                        <Row>
                            <Col>
                                <Form.Control type="text" placeholder="CARD SAFE NUMBER" className="form-control-group" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Control type="password" placeholder="Password" className="form-control-group"/>
                            </Col>
                        </Row>
                        </Form.Group>
                    </Form>
                    <Button variant="dark" className="signup-button-group">
                        <Link to='/VerifyEmail' className="link-button-group">
                            SIGN IN
                        </Link>
                    </Button>
                    <Button variant="dark" className="signup-button-group">
                        <Link to='/signup' className="link-button-group">
                            SIGN UP
                        </Link>
                    </Button>
                    </Col>
                </Row>
            </Container>
        </section> 
    )
}


export default Login; 