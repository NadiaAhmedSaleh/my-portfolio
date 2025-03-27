import { Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Bayo from "../assets/img/bayo.png";
import Remotecoders from "../assets/img/remotecoders.png"


function Experience() {

    return (
    <section className="skillssection" id="experience">
            <h1 className="skills">Work Experience</h1>

        <Container>
            <Row className='homeRow my-4'>
            <Col xs={12} md={8} xl={8} className='mx-2'>
            <h4> Front-end Developer</h4>
            <h5> Bayo Solutions - RemoteCoders </h5>

            <p> Frontend developer in Bayo Solutions a Swiss company for IT services, specialized in insurance brokers, trust companies and law firms. <br/>
             My role as a frontend included implementing both logic and styling, ensuring seamless user experiences. 
             I collaborated with backend developers to identify and resolve critical bugs, optimizing application performance.</p>
            <p>Proactive in brainstorming and enhancing features with the team lead, contributing to the continuous improvement of projects. Works closely with the UI/UX team to address design inconsistencies, leading to a more intuitive and visually appealing interface.</p>
            <p>Proficient in modern technologies, including React.js, Next.js, Zustand for state management, SCSS, GitHub and Jira for workflow</p>
            </Col>

           <Col xs={12} md={8} xl={3}>
           <img
           src={Bayo}
           width="200px"
           height="150px"
           alt="bayosolutions"
           onClick={() => {window.open("https://www.bayo.ch/de/" , "_blank")}}
           />    

           <img 
           src={Remotecoders} 
           width="200px" 
           height="150px"
           alt="remotecoders"
           onClick={() => { window.open("https://remotecoders.org/" , "_blank")}}
           />
           
           </Col>

        </Row>
           
          
        </Container>      
        


    
    </section> );
}

export default Experience;