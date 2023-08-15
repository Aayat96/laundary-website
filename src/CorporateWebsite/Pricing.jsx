import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';





const pricingData = [
    {
        id: 1,
        plan: 'Basic',
        price: '£70',
        features: ['Washing', 'Ironing', 'Packaging', '5  Clothes', 'No delivery'],
        link: 'https://www.google.com'
    },
    {
        id: 2,
        plan: 'Premium',
        price: '£100',
        features: ['Washing', 'ironing', '15 Clocth', '10 Trousers', 'No Delivery'],
        link: 'https://www.facebook.com'
    },
    {
        id: 3,
        plan: 'Ultimate',
        price: '£150',
        features: ['Washing', 'Ironing', '15 clothes', '15 trousers ', 'Home delivery'],
        link: 'https://www.twitter.com'
    }
]

function Pricing() {
    return (
        <section id="pricing" className='block pricing-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Pricing & Plan</h2>
                    <div className='subtitle'>Check our Pricing & Plan</div>
                </div>
                <Row >
                    {pricingData.map(pricing => {
                        return (
                            <Col xs='4' key={pricing.id}>
                                <div className='heading'>
                                    <h2>{pricing.plan}</h2>
                                    <span className='price'>{pricing.price}</span>
                                </div>
                                <div className='content'>
                                    <ListGroup>
                                        {pricing.features.map((feature, index) => {
                                            return (
                                                <ListGroup.Item key={index}>{feature}</ListGroup.Item>
                                            )
                                        })}
                                    </ListGroup>
                                </div>
                                <div className='btn-holder '>
                                    <a href={pricing.link} className='btn btn-primary'>Order Now</a>
                                </div>
                            </Col>
                        )
                    })}

                </Row>
            </Container>
        </section>
    );
}

export default Pricing;