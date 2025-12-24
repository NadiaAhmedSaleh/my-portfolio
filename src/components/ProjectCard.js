import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function ProjectCard({ title, description, imgUrl , link}) {
  return (
    <Col xs={12} sm={6} md={4} className="mb-4 d-flex justify-content-center">
      <div>
      
          <Card className="proj-imgbx project-card">
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
