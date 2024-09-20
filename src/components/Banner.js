import { useState,useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from"../assets/img/header-img.svg";

function Banner() {

    
    const [loopNum, setLoopNum]=useState(0);
    const [isDeleting, setIsDeleting]=useState(false);
    const toRotate=["FrontEnd Developer" ,"Web Developer", "Web Designer" ];
    const [text, setText]=useState('');
    const [delta,setDelta]=useState(300-Math.random()*100);
    const period=2000;
    

    useEffect(()=>{
        let ticker= setInterval(()=>{
            tick();

        }, delta)

        return ()=>{clearInterval(ticker)}
    }, [text])

    const tick =()=>{
        let i=loopNum % toRotate.length;
        let fullText=toRotate[i];
        let updatedText=isDeleting?fullText.substring(0, text.length - 1): fullText.substring(0, text.length + 1);
        
        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta =>prevDelta/2)
        }

        if(!isDeleting&& updatedText===fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting&& updatedText===""){
           setIsDeleting(false);
           setLoopNum(loopNum +1);
           setDelta(500);
        }
    }
    return (
    <section className="banner" id="home">
        <Container >
            <Row className='homeRow' >

                <Col xs={12} md={8} xl={8} >
                <span className='tagline'>

                    Welcome to my portfolio

                </span>
                
                <h1>
                 Hi I'm Nadia
                 <br/>
                
                 <span className='wrap'>
                      {text}
                 </span>
                </h1>

                <p> Passionate and dedicated Front End Web Developer with a strong
               foundation in programming and coding. Well-versed in HTML, CSS,
               JavaScript, jQuery, Bootstrap, Typescript, Angularv16, Figma, Git and Github with additional
               knowledge in C++, Object-Oriented Programming, Data Structures,
               Algorithms, and Design Patterns. Committed to continuous learning and
               applying modern technologies to create user-friendly and responsive
               web pages. lately learning React Js, Tailwind Css , Next Js and Eager to contribute my skills and knowledge to a dynamic
               development team</p>
              
                </Col>

              <Col xs={12} md={8} xl={4} >
              <img src={headerImg} alt="Header Img" />
                </Col>
            </Row>
        </Container>
    
    </section> );
}

export default Banner;