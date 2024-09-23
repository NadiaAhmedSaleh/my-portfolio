import Container from "react-bootstrap/Container";
import { Row, Col, Tab } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import ProjectCard from "./ProjectCard";

//react projects

import admin from "../assets/img/adminDashboard.png";


//angular projects

import ecommerce from "../assets/img/ecommerce.png";
import userdashboard from "../assets/img/userdashboard.png";
import cooking from "../assets/img/cooking.png";
import transactions from "../assets/img/transactions.png"

 //html5 css3 js projects

import weather from "../assets/img/weather.png";
import daniels from "../assets/img/daniels.png";
import quotes from "../assets/img/Quotes.png";
import signup from "../assets/img/sign-up.png";
import todo from "../assets/img/todolist.png"


function Projects() {

  const allProjects=[

    {
      title: "Ecommerce",
      description: "Click to check",
      imgUrl: ecommerce,
      link:"https://nadiaahmedsaleh.github.io/Ecommerce-App/register"
    },
    {
      title: "UserDashboard",
      description: "Click to check",
      imgUrl: userdashboard,
      link:"https://nadiaahmedsaleh.github.io/DynamicUserDashboard/home"
    },
    {
      title: "Cooking lover",
      description: "Click to check",
      imgUrl: cooking,
      link:"https://nadiaahmedsaleh.github.io/YummyMeals/home"
    },
    {
      title: "Transactions' Data",
      description: "Click to check",
      imgUrl: transactions,
      link:"https://nadiaahmedsaleh.github.io/Customers-Data/home"
    },
 
    {
      title: "Quotes",
      description: "Click to check",
      imgUrl: quotes,
      link:"https://nadiaahmedsaleh.github.io/Random-Quotes/"
    },
    {
      title: "Sign-Up",
      description: "Click to check",
      imgUrl: signup,
      link:"https://nadiaahmedsaleh.github.io/newsletter-signup-form/"
    },
    {
      title: "Weather",
      description: "Click to check",
      imgUrl: weather,
      link:"https://nadiaahmedsaleh.github.io/Weather/"
    },
    {
      title: "Landing Page",
      description: "Click to check",
      imgUrl: daniels,
      link:"https://nadiaahmedsaleh.github.io/Daniels/"
    },
    {
      title: "ToDo List",
      description: "Click to check",
      imgUrl: todo,
      link:"https://nadiaahmedsaleh.github.io/CodeAlpha_ToDoList/"
    },
  ]

  const projects = [
    {
      title: "Quotes",
      description: "Click to check",
      imgUrl: quotes,
      link:"https://nadiaahmedsaleh.github.io/Random-Quotes/"
    },
    {
      title: "Sign-Up",
      description: "Click to check",
      imgUrl: signup,
      link:"https://nadiaahmedsaleh.github.io/newsletter-signup-form/"
    },
    {
      title: "Weather",
      description: "Click to check",
      imgUrl: weather,
      link:"https://nadiaahmedsaleh.github.io/Weather/"
    },
    {
      title: "Landing Page",
      description: "Click to check",
      imgUrl: daniels,
      link:"https://nadiaahmedsaleh.github.io/Daniels/"
    },
    {
      title: "ToDo List",
      description: "Click to check",
      imgUrl: todo,
      link:"https://nadiaahmedsaleh.github.io/CodeAlpha_ToDoList/"
    },
  ];

  const angularProjects=[
  
    {
      title: "Ecommerce",
      description: "Click to check",
      imgUrl: ecommerce,
      link:"https://nadiaahmedsaleh.github.io/Ecommerce-App/register"
    },
    {
      title: "UserDashboard",
      description: "Click to check",
      imgUrl: userdashboard,
      link:"https://nadiaahmedsaleh.github.io/DynamicUserDashboard/home"
    },
    {
      title: "Cooking lover",
      description: "Click to check",
      imgUrl: cooking,
      link:"https://nadiaahmedsaleh.github.io/YummyMeals/home"
    },
    {
      title: "Transactions' Data",
      description: "Click to check",
      imgUrl: transactions,
      link:"https://nadiaahmedsaleh.github.io/Customers-Data/home"
    },

  ]

  const reactProjects=[
     
    {
      title: "Admin Dashboard",
      description: "Click to check",
      imgUrl: admin,
      link:"https://nadiaahmedsaleh.github.io/Daniels/"
    },
   

  ]
  
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Check my projects</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">HTML5 & CSS & JS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Angular</Nav.Link>
                </Nav.Item>
               
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                  {allProjects.map((project, index) => {
                      return (
                        <ProjectCard key={index} {...project}></ProjectCard>
                      );
                    })}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <Row>
                  {projects.map((project, index) => {
                      return (
                        <ProjectCard key={index} {...project}></ProjectCard>
                      );
                    })}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                  <Row>
                    {angularProjects.map((project, index) => {
                      return (
                        <ProjectCard key={index} {...project}></ProjectCard>
                      );
                    })}
                  </Row>
                </Tab.Pane>

                
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      
    </section>
  );
}

export default Projects;
