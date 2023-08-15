import React from 'react';
import { Container } from 'react-bootstrap';
import {Row }from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Image} from 'react-bootstrap';

import img1 from './assets/images/about us.jpeg';
function About() {
    return (
        <section id='about' className='block about-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h1>Who We Are</h1>
                    <div className='subtitle'>Learn More About Us</div>
                </div>
                <Row>
                    <Col xs={6}>
                        <Image  style={{height:"80%", width:"80%"}} src={img1} />
                    </Col>
                    <Col xs={6}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Reprehenderit dicta veritatis sint quidem asperiores
                            magni eaque praesentium temporibus, magnam, eveniet consequatur possimus nihil?
                            Nemo deserunt repudiandae soluta neque doloribus, quo!
                        </p>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default About;