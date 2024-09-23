import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

import basics from "../assets/img/basics.jpg";
import frontroute from "../assets/img/frontend.png";
import sprints from "../assets/img/sprints.jpeg";
import nti from "../assets/img/nti web design.png";




function Certificates() {
    return ( 
    
    <section className="cerificates">


      <h2> Certificates </h2>

        <Container>
          <Row>
            
          <Col xs={12} md={6} xl={4}>
           <div>
      
          <Card
            style={{ width: "20rem", height: "14rem" }}
            className="proj-imgbx"
            >
            <Card.Img variant="top" src={basics} />

            <Card.Body >
              <Card.Text className="proj-text">
                <h4>Programming Fundmentals</h4>
                
              </Card.Text>
            </Card.Body>
          </Card>
       
      </div>
      
      </Col>

      <Col xs={12} md={6} xl={4}>
           <div>
      
          <Card
            style={{ width: "20rem", height: "14rem" }}
            className="proj-imgbx"
            >
            <Card.Img variant="top" src={frontroute} />

            <Card.Body >
              <Card.Text className="proj-text">
                <h4>FrontEnd AngularJs</h4>
                
              </Card.Text>
            </Card.Body>
          </Card>
       
      </div>
      
      </Col>


      <Col xs={12} md={6} xl={4}>
           <div>
      
          <Card
            style={{ width: "20rem", height: "14rem" }}
            className="proj-imgbx"
            >
            <Card.Img variant="top" src={sprints}/>

            <Card.Body >
              <Card.Text className="proj-text">
                <h4>frontEnd ReactJs</h4>
                
              </Card.Text>
            </Card.Body>
          </Card>
       
      </div>
      
      </Col>
      
      <Col xs={12} md={6} xl={4}>
           <div>
      
          <Card
            style={{ width: "20rem", height: "14rem" }}
            className="proj-imgbx"
            >
            <Card.Img variant="top" src={nti}/>

            <Card.Body >
              <Card.Text className="proj-text">
                <h4>Web Design</h4>
                
                
              </Card.Text>
            </Card.Body>
          </Card>
       
      </div>
      
      </Col>


          </Row>

        </Container>
    
    
    
    </section> 
    
);
}

export default Certificates;