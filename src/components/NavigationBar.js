import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState , useEffect} from 'react';

import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-icon-1-logo-svgrepo-com.svg';


function NavigationBar() {
    const [activeLink, setActiveLink]=useState('home');
    const [scrolled, setScrolled]=useState(false);

    useEffect(()=>{
        const onScroll=()=>{
            if(window.scrollY>50){
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onscroll);
        return()=>window.removeEventListener("scroll", onScroll)
    }, [])


    const onUpdateActiveLink=(value)=>{
        setActiveLink(value);
    }
    return ( <>
    
    <Navbar  expand="lg" className={scrolled? "scrolled" : ""} >
      <Container>
        <Navbar.Brand href="#home">
         <h2>Nadia Saleh</h2>
        </Navbar.Brand>
      
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='home'? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink==='skills'? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink==='projects'? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
         
          </Navbar.Collapse>
          
         <span className='navbar-text'>
            <div className='social-icon'>
              <a href='#'><img src={navIcon1} alt="" /></a>
              <a href='#'><img src={navIcon2} alt="" /></a>
             
                
            </div>
            <button className='vvd' onClick={()=>console.log('connect')}>
                <span>Let's Connect</span>
            </button>
         </span>
        
      </Container>
    </Navbar>
    
    
    </> );
}

export default NavigationBar;