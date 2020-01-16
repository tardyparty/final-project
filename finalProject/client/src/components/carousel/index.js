import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './style.css';
import { Button } from 'react-bootstrap';

class SlideShow extends React.Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/HP_carousel_1.jpeg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>CAMPERS</h1>
              <p>YOUR CAMPING HUB FOR RENTAL GEAR, CAMPSITES AND COMMUNITY</p>
              <Button className="btn-carousel" href="/store" variant="primary">RENT YOUR PACKAGE</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/HP_carousel_2.jpeg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h1>CAMPERS</h1>
              <p>YOUR CAMPING HUB FOR RENTAL GEAR, CAMPSITES AND COMMUNITY</p>
              <Button className="btn-carousel" href="/store" variant="primary">RENT YOUR PACKAGE</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/HP_carousel_3.jpeg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h1>CAMPERS</h1>
              <p>YOUR CAMPING HUB FOR RENTAL GEAR, CAMPSITES AND COMMUNITY</p>
              <Button className="btn-carousel" href="/store" variant="primary">RENT YOUR PACKAGE</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default SlideShow;