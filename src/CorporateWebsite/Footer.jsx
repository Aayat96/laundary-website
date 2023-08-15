import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
    const year = new Date().getFullYear();

    return (
        <Container fluid >
            <div className='copyright'>
                <span>&copy; Home Service Laundary {year}</span>
            </div>
            <div className='socials'>
                <ul>
                    <li> <a href="https://www.facebook.com"><i className="bi bi-facebook"></i></a>  </li>
                    <li> <a href="https://www.instagram.com"><i className="bi bi-instagram"></i></a>  </li>
                    <li> <a href="https://www.twitter.com"><i className="bi bi-twitter"></i></a> </li>
                </ul>
            </div>
        </Container>
    );
}

export default Footer;