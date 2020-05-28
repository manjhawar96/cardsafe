import React from 'react'; 
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import './verify.css'; 

const VerifyEmail = () => {
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
                    <Col>
                        <p className="logo"> CARDSAFE </p>
                    </Col>
                </Row>
                <Row>
                    <Col align="center">
                    <p className="muted-content"> Please verify email address (for privacy and account security) </p>
                    <p className="muted-content"> cam***re@gmail.com </p>
                    <Form>
                        <Form.Group controlId="verifyForm">
                            <Row>
                                <Col>
                                    <Form.Control type="email" placeholder="Email Code" className="form-control-group"/>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>
                    <Button variant="dark" className="signup-button-group">
                        <Link to='/dashboard' className="link-button-group" >
                            VERIFY
                        </Link>
                    </Button>
                    </Col>
                </Row>
            </Container>
        </section> 
    )
}

export default VerifyEmail;