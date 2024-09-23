import { useEffect, useState } from "react";
import contactImg from "../assets/img/contact-img.svg"
import Container from "react-bootstrap/Container";
import {  Row , Col } from "react-bootstrap";
import { useForm, ValidationError } from '@formspree/react';


function Contact() {
    const formInitialDetails={
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        message:''
    }

    
 const [buttonText, setButtonText]=useState('Send');

  const cancelCourse = () => { 
        document.getElementById("Form").reset();
      }

const [state, handleSubmit] = useForm("xeojbgqr");

useEffect(() => {
    if(state.succeeded){
        console.log(state.succeeded);
        setButtonText("Sent");
        cancelCourse();
    }
    console.log({state});
    
}, [state.succeeded])

    
    return ( 
    <section className="contact" id="connect">
        <Container>
            <Row className="align-items-center">
            <Col size={12} md={6}>
            <img src={contactImg} alt="Contact Us">
            </img>
            
            </Col>

            <Col size={12} md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit} id="Form">
                <Row>
                    <Col sm={6}  className="px-1"> <input type="text"  placeholder="First Name" ></input> </Col>
                    <Col sm={6}  className="px-1"> <input type="text"  placeholder="Last Name" ></input> </Col>
                    <Col sm={6}  className="px-1"> <input type="email" name="email"  placeholder="Email" ></input> </Col>
                    <ValidationError 
                    prefix="Email" 
                     field="email"
                       errors={state.errors}
                        />
                    
                    <Col sm={6}  className="px-1"> <input type="phone"  placeholder="Phone" ></input> </Col>
                    
                    <Col size={12} className="px-1">
                     <textarea  rows="6"  placeholder="Message" name="message"></textarea>
                     <ValidationError 
                        prefix="Message" 
                          field="message"
                           errors={state.errors}
                            />
                    
                     <button type="submit" disabled={state.submitting}> <span>{buttonText}</span> </button>
                    </Col>
                 
                </Row>
            </form>
            
            </Col>
            </Row>
        </Container>


        

    </section> );
}

export default Contact;