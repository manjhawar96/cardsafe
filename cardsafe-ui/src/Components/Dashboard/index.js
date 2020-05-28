import React, { Component } from 'react'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import cardImage from '../../images/cardsafe-image-card-both-sides.png';
import { Link } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import logo from '../../images/Logo_CardSafe_Black.png';
import './dashboard.css';

const mapStyles = {
    width: '100%',
    height: '100%',
    position: 'relative !important'
};

class Dashboard extends Component {

    constructor() {
        super(); 
        this.state = {
            step: 0
        }; 
    }

    render() {
        return(
            <Container fluid="true">
                <Row>
                    <Col className="logo-container">
                        <img src={logo} alt="logo" />
                    </Col>
                    <Col>
                        <Button variant="dark" className="absolute-button-group">
                            <Link to='/' className="link-button-group">
                                BACK HOME
                            </Link>
                        </Button>
                    </Col>
                </Row>
                <Row className="dashboard" style={{ height: '100vh', width: '100%' }}>
                    <Col xs={6} md={2} className="">
                        <div className="dashboard-cards" id="card1">
                            <div>
                                <p className="heading-content"> Card Status </p>
                                <div className="card-element-green">
                                    <p> CARD ID: 1G3B-7FD4 </p>
                                    <p className="green-status"> STATUS: GOOD </p>
                                </div>
                                <div className="card-element-green">
                                    <p> CARD ID: 3D3B-7DH3 </p>
                                    <p className="green-status"> STATUS: GOOD </p>
                                </div>
                                <div className="card-element-yellow">
                                    <p> CARD ID: 87GT-HD53 </p>
                                    <p className="yellow-status"> STATUS: OKAY </p>
                                </div>
                            </div>
                        </div>
                        <div className="dashboard-cards" id="card2">
                            <p className="heading-content"> Contact Information </p>
                            <div className="card-element-green">
                                <p> Email </p>
                                <p className="green-status"> VERIFIED </p>
                            </div>
                            <div className="card-element-green">
                                <p> Second Email</p>
                                <p className="green-status"> VERIFIED </p>
                            </div>
                            <div className="card-element-yellow">
                                <p> Phone Number </p>
                                <p className="yellow-status"> MISSING </p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={10} className="map-container">
                        <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyCBAP4vyqPQBp3EG-VF-xtpUAp3K3zhZhU'}}
                        defaultZoom={14}
                        defaultCenter={{
                            lat: -1.2884,
                            lng: 36.8233
                        }}
                        style={mapStyles}
                        >
                        </GoogleMapReact>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Dashboard;