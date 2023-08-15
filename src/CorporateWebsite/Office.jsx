import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';



const workingShowData = [
    {
      id: 1,
      image: require('./assets/images/work in progress 1.jpeg'),
      title: 'Separate Color Wash',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
      link: 'https://www.google.com'
    },
    {
      id: 2,
      image: require('./assets/images/work in progress 2.jpeg'),
      title: 'Geting it clean',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
      link: 'https://www.facebook.com'
    },
    {
      id: 3,
      image: require('./assets/images/finished and returned .jpeg'),
      title: 'Ready for Delivery',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
      link: 'https://www.twitter.com'
    }
  ]
  

function Office() {
    return (
        <section id="office" className='office office-block'>
            <Container fluid >
                <div className='title-holder'>
                    <h2>Work in Progress</h2>
                    <div className='subtitle'>See how we do it</div>
                </div>
                <Row>
               {workingShowData.map(work =>{
                return(
                    <Col xm={4} className='holder' key={work.id}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={work.image} />
                        <Card.Body>
                            <Card.Title>{work.title}</Card.Title>
                            <Card.Text>
                                    {work.description}
                            </Card.Text>
                           <a href={work.link} className='btn btn-primary'>Click for more</a>
                        </Card.Body>
                    </Card>
                </Col>
                )
               }
                )}
                   
                </Row>
            </Container>
        </section>
    );
}



export default Office;