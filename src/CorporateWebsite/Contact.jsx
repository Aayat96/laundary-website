import React from 'react';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';



function Contact() {
    return (
        <section id='contacct' className='block contact-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Contact Us</h2>
                    <div className='subtitle'>Get in touch</div>
                </div>
                <Form className='contact-form'>
                    <Row>
                        <Col xm={4}>
                            <Form.Control type='text' placeholder="Enter your full Name" />
                        </Col>
                        <Col xm={4}>
                            <Form.Control type='email' placeholder="Enter your email address" />
                        </Col>
                        <Col xm={4}>
                            <Form.Control type='tel' placeholder="Enter your Phone number" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xm={12}>
                            <Form.Control as="textarea" placeholder='Enter your Message here' />
                        </Col>
                    </Row>

                    <div className='btn-holder'>
                        <Button type='submit'>Submit</Button>
                    </div>
                </Form>
            </Container>
            <div>
            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3114205.0585516426!2d-85.31012236287808!3d40.337556872934314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8836e97ab54d8ec1%3A0xe5cd64399c9fd916!2sOhio%2C%20USA!5e0!3m2!1sen!2sng!4v1691513719159!5m2!1sen!2sng"
               allowFullscreen="" loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Container fluid>
                <div className='contact-info'>
                    <ul>
                        <li>
                          <i className="bi bi-envelope-at"></i>
                          <span>  homeservice@gmail.com</span> 
                        </li>
                        <li>
                           <i className="bi bi-telephone-inbound"></i>
                           <span> 0000 0000 000</span> 
                        </li>
                        <li>
                         <i className="bi bi-geo-alt-fill"></i>
                         <span> Ohio United state</span>  
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
    );
}

export default Contact;