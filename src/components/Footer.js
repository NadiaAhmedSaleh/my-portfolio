import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import location from "../assets/img/location-pin-svgrepo-com.svg";
import mail from "../assets/img/email-mail-web-svgrepo-com.svg"

function Footer() {
    return ( 
    <footer className="footer">
    <Container className="cont">
        <Row >

       <Col sm={6} xl={6} className="icons">
        <img src={location}>
        </img>
  
        <h2>
            Address
        </h2>

        <p>
            Helwan, Cairo
        </p>
        </Col>


        <Col sm={6} xl={6} className="icons">
        <img src={mail}>
        </img>
    
        <h2>
            Email
        </h2>

        <p>
            nadiaahmedsaleh99@gmail.com
        </p>
        </Col>
       
        </Row>
    </Container>
    
    </footer> );
}

export default Footer;