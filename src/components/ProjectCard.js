import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function ProjectCard({ title, description, imgUrl , link}) {
  return (
    <Col xs={12} md={6} xl={4}>
      <div>
      
          <Card
            style={{ width: "20rem", height: "10rem" }}
            className="proj-imgbx"
          >
            <Card.Img variant="top" src={imgUrl} />
            <Card.Body >
              <Card.Text className="proj-text">
                <h4>{title}</h4>
                <span><a href={link} target="_blank">{description}</a></span>
              </Card.Text>
            </Card.Body>
          </Card>
       
      </div>
    </Col>
  );
}

export default ProjectCard;
