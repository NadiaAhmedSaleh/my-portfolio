import { Col } from "react-bootstrap";

function ProjectCard({title, description, imgUrl}) {
    return (
      <Col xs={12} md={6} xl={4}>
        <div className="proj-imgbx">
          <img
            src={imgUrl}
            alt={title}
            style={{ height: "110%", width: "110%" }}
          />
          <div className="proj-text">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Col>
    );
}

export default ProjectCard;