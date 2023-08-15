import React from 'react';
import { Container } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';


var testimonialsData = [
    {
        id: 1,
        name: 'John Wills',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.',
        location: 'New jersey'
    },
    {
        id: 2,
        name: 'Jasmine Perry',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, magni fugiat eveniet minus perspiciatis! Nostrum laborum maxime consequuntur repellat nam magni, quae incidunt distinctio enim itaque eligendi laboriosam, quod, ad!',
        location: 'Alabama'
    },
    {
        id: 3,
        name: 'Rocky Johnson',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium facilis optio porro omnis alias eaque corporis error est ut, reprehenderit quae asperiores illum quo voluptates debitis non. Repellat fugit, asperiores?',
        location: 'Ohio'
    }
]

function Testimonials() {
    return (
        <section id='testimonials' className='testimonials-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Client testimonials</h2>
                    <div className='subtitle'>Here from Our Clients</div>
                </div>
                <Carousel controls ={false}>
                    {testimonialsData.map(testimonials => {
                        return (
                            <Carousel.Item key={testimonials.id}>
                                <blockquote>
                                    <p>{testimonials.description}</p>
                                    <cite>
                                        <span className='name'>{testimonials.name}</span>
                                        <span className='location'>{testimonials.location}</span>
                                    </cite>
                                </blockquote>
                            </Carousel.Item>
                        )
                    })}

                </Carousel>
            </Container>
        </section>

    );
}

export default Testimonials;