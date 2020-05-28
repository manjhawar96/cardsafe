import React, { Component } from 'react'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import cardImage from '../../images/cardsafe-image-card-both-sides.png';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo_CardSafe_Black.png';

import './signup.css';

class Signup extends Component {

    constructor() {
        super(); 
        this.state = {
            step: 0
        }; 
    }

    nextStep = () => {
        const { step } = this.state; 
        this.setState({
            step: step + 1
        }); 
    }

    prevStep = () => {
        const { step } = this.state; 
        this.setState({
            step: step - 1
        }); 
    }

    handleChange = input => event => {
        this.setState({
            [input]: event.target.value
        });
    }

    getSignupUI = step => {
        step = (step < 0) ? 0 : step; 
        step = (step > 4) ? 4 : step;
        
        switch(step) {
            case 0:
                return this.basicInfo(); 
            case 1: 
                return this.addressInfo();
            case 2:
                return this.contactInfo();
            case 3: 
                return this.priceInfo();
            case 4:
                return this.finalInfo();
            default: 
                return this.basicInfo();
        }
    }

    basicInfo = () => {
        let component = 
        <div> 
            <p className="bold-heading"> <img src={logo} alt="logo" className="heading-logo"/> CONTACT TRACING </p>
            <p className="muted-content"> We are not facebook.</p>
            <p className="muted-content"> We actually care about putting data privacy first. <br /> 
                How? Cut the card adn there's no more tracking. 
            </p> 
            <p className="muted-content"> Yes. It's actually that simple. </p>
            <Button variant="dark" onClick={this.nextStep} className="signup-button-group"> GET STARTED </Button>
        </div>
        return component;
    }

    addressInfo = () => {
        let component = 
        <div> 
            <p className="bold-heading"> <span> Address </span> Information </p>
            <p className="muted-content"> We use this to send you the card. </p>
            <Form>
                <Form.Group controlId="addressInfoForm">
                    <Row> 
                        <Col>
                            <Form.Control type="text" placeholder="First Name" className="form-control-group"/>
                        </Col>
                        <Col>
                            <Form.Control type="text" placeholder="Last Name" className="form-control-group"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control type="text" placeholder="Address Line 1" className="form-control-group"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control type="text" placeholder="Apartment, Unit, Etc. (Optional)" className="form-control-group"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control type="text" placeholder="City" className="form-control-group"/>
                        </Col>
                        <Col>
                            <Form.Control type="text" placeholder="State" className="form-control-group"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control type="text" placeholder="County" className="form-control-group"/>
                        </Col>
                        <Col>
                            <Form.Control type="text" placeholder="Postal Code" className="form-control-group"/>
                        </Col>
                    </Row>   
                </Form.Group>
            </Form>
            <Button variant="dark" onClick={this.prevStep} className="signup-button-group"> BACK </Button>
            <Button variant="dark" onClick={this.nextStep} className="signup-button-group"> NEXT </Button>
        </div>
        return component;
    }

    contactInfo = () => {
        let component = 
        <div> 
            <p className="bold-heading"> <span> Contact </span> Information </p>
            <p className="muted-content"> We will use this to notify when you <br />
                have been in contact with COVID-19.
             </p>
            <Form>
                <Form.Group controlId="addressInfoForm">
                    <Row>
                        <Col>
                            <Form.Control type="email" placeholder="Email" className="form-control-group"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control type="phone number" placeholder="Phone Number" className="form-control-group"/>
                        </Col>
                    </Row>
                </Form.Group>
            </Form>
            <Button variant="dark" onClick={this.prevStep} className="signup-button-group"> BACK </Button>
            <Button variant="dark" onClick={this.nextStep} className="signup-button-group"> NEXT </Button>
        </div>
        return component;
    }

    priceInfo = () => {
        let component = 
        <div> 
            <p className="bold-heading"> <span> Pricing </span> Information </p>
            <p className="muted-content"> Last step to your CardSafe. <br />
                $1.00 for the card and shipping. 
             </p>
            <Form>
                <Form.Group controlId="addressInfoForm">
                    <Form.Control type="number" placeholder="Card Number" className="form-control-group"/>
                    <Form.Control type="date" placeholder="Expiration Date" className="form-control-group"/>
                    <Form.Control type="number" placeholder="CVV Number" className="form-control-group"/>
                </Form.Group>
            </Form>
            <p className="muted-content"> How many cards? <br />
                They cost $1 per card. Shipping is included. 
            </p> 
            <Form.Group controlId="addressInfoForm">
                <Form.Control as="select" placeholder="Card Number" className="form-control-group">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
            </Form.Group>
            <Button variant="dark" onClick={this.prevStep} className="signup-button-group" > BACK </Button>
            <Button variant="dark" onClick={this.nextStep} className="signup-button-group"> BUY </Button> 
        </div>
        return component;
    }

    finalInfo = () => {
        let component = 
        <div> 
            <p className="bold-heading"> <img src={logo} alt="logo" className="heading-logo"/> Order Complete </p>
            <p className="muted-content"> We will send you the shipping details on your email. <br /> 
                Hold on tight!  
            </p> 
            <Button variant="dark" onClick={this.nextStep} className="signup-button-group"> 
                <Link to='/' className="link-button-group">
                    BACK HOME
                </Link>
            </Button>
        </div>
        return component;
    }

    render() {
        const {step} = this.state; 
        let form = this.getSignupUI(step); 
        return(
            <Container fluid="true">
                <Row className="signup-row">
                    <Col xs={6} md={4} className="signup-card-display">
                        <img src={cardImage} alt="card both sides"/>
                    </Col>
                    <Col xs={12} md={8} className="signup-form-display">
                        {form}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Signup;