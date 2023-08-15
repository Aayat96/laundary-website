import React from "react";
import { Carousel } from "react-bootstrap";


const heroData = [
    {
      id: 1,
      image: require('./assets/images/finished & ironed1.jpeg'),
      title: 'Perfectly pressed',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',     
    },
    {
      id: 2,
      image: require('./assets/images/images delivery .jpeg'),
      title: 'Get it at you doorstep',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',    
    },
    {
      id: 3,
      image: require('./assets/images/suit up.jpeg'),
      title: 'Suit up for Office',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
    }
  ]

function Hero(){
    return (
        <section id = "home" className="hero-block">
            <Carousel>
                {heroData.map(hero =>{
                    return (
                        <Carousel.Item key={hero.id}>
                        <img
                          className="d-block w-100"
                          src={hero.image}
                          alt={"slide " + hero.id }
                        />
                        <Carousel.Caption>
                          <h3>{hero.title}</h3>
                          <p>{hero.description}</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    
                    )
                })
           }

</Carousel>
        </section>
    );
}

export default Hero;