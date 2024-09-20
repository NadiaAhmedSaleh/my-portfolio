import Container from "react-bootstrap/Container";
import { Row, Col, Tab } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";

import ecommerce from "../assets/img/ecommerce.png";
import userdashboard from "../assets/img/userdashboard.png";
import weather from "../assets/img/weather.png";
import daniels from "../assets/img/daniels.png";
import cooking from "../assets/img/cooking.png";


function Projects() {
  const projects = [
    {
      title: "web development",
      description: "Design",
      imgUrl: ecommerce,
    },
    {
      title: "web development",
      description: "Design",
      imgUrl: userdashboard,
    },
    {
      title: "web development",
      description: "Design",
      imgUrl: weather,
    },
    {
      title: "web development",
      description: "Design",
      imgUrl: daniels,
    },
    {
        title: "web development",
        description: "Design",
        imgUrl: cooking,
      },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Check my projects</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills"  className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">             
            <Nav.Item>

                <Nav.Link eventKey="first">All</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">HTML5 & CSS & JS</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Angular</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth" >ReactJs</Nav.Link>
              </Nav.Item>


            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="first">
                    <Row>
                        {
                            projects.map((project, index)=>{
                                return (
                                    <ProjectCard
                                    key={index}
                                    {...project}
                                    >

                                    </ProjectCard>
                                )
                            })
                        }
                    </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="second">{
                            projects.map((project, index)=>{
                                return (
                                    <ProjectCard
                                    key={index}
                                    {...project}
                                    >

                                    </ProjectCard>
                                )
                            })
                        }</Tab.Pane>
                <Tab.Pane eventKey="third">{
                            projects.map((project, index)=>{
                                return (
                                    <ProjectCard
                                    key={index}
                                    {...project}
                                    >

                                    </ProjectCard>
                                )
                            })
                        }</Tab.Pane>

                        <Tab.Pane eventKey="fourth">{
                            projects.map((project, index)=>{
                                return (
                                    <ProjectCard
                                    key={index}
                                    {...project}
                                    >

                                    </ProjectCard>
                                )
                            })
                        }</Tab.Pane>

            </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right " src={colorSharp2}/>
    </section>
  );
}

export default Projects;
