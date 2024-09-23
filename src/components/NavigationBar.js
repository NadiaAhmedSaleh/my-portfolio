import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState , useEffect} from 'react';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-icon-1-logo-svgrepo-com.svg';



function NavigationBar() {
  

  //navbar change color

   const [color,setColor]=useState(false);

   const changeColor=()=>{
    if(window.scrollY>90){

      setColor(true)
    }else{
      setColor(false)
    }
   }

   window.addEventListener("scroll", changeColor);


   //active link to home
    const [activeLink, setActiveLink]=useState('home');
    const onUpdateActiveLink=(value)=>{
        setActiveLink(value);
    }


    //the cv button


    return (
      <>
        <Navbar expand="lg" className={color ? "scrolled" : " "} id="" navbar>
          <Container>
            <Navbar.Brand href="#home">
              <h2>Nadia Saleh</h2>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link
                  href="#home"
                  className={
                    activeLink === "home" ? "active navbar-link" : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("home")}
                >
                  Home
                </Nav.Link>

                <Nav.Link
                  href="#skills"
                  className={
                    activeLink === "skills"
                      ? "active navbar-link"
                      : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("skills")}
                >
                  Skills
                </Nav.Link>
                <Nav.Link
                  href="#project"
                  className={
                    activeLink === "project"
                      ? "active navbar-link"
                      : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("project")}
                >
                  Projects
                </Nav.Link>
              </Nav>

              <div className="socialss">
                <span className="navbar-text">
                  <div className="social-icon">
                    <a
                      href="https://www.linkedin.com/in/nadia-ahmed-8296b51a0/"
                      target="_blank"
                    >
                      <img src={navIcon1} alt="" />
                    </a>
                    <a
                      href="https://github.com/NadiaAhmedSaleh"
                      target="_blank"
                    >
                      <img src={navIcon2} alt="" />
                    </a>
                  </div>
                </span>

                <button className="vvd">
                  <a
                    className="navButton"
                    href="https://drive.google.com/file/d/1et7CaNM5m64LWPPGyUBRWI5KKfxMhCWd/view?usp=sharing"
                    target="_blank"
                    download="https://drive.google.com/file/d/1et7CaNM5m64LWPPGyUBRWI5KKfxMhCWd/view?usp=sharing"
                  >
                    Download CV
                  </a>
                </button>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
}

export default NavigationBar;