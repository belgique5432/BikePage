import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carousel.css';
import bike from '../../Images/moto1.jpg';
import bike2 from '../../Images/moto2.jpg';
import bike3 from '../../Images/moto3.jpg';

function CustomCarousel() {
  return (
    <div className="custom-carousel-container">
      <Carousel
        interval={3000} // Cambia la imagen cada 3 segundos
        controls={false} // Oculta los controles de navegación
        indicators={false} // Oculta los indicadores de los puntos
        nextIcon={<span className="carousel-control-next-icon" />}
        prevIcon={<span className="carousel-control-prev-icon" />}
        className="custom-carousel"
      >
        <Carousel.Item>
          <div className="carousel-image">
            <img
              className="d-block w-100"
              src={bike}
              alt="First slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image">
            <img
              className="d-block w-100"
              src={bike2}
              alt="Second slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image">
            <img
              className="d-block w-100"
              src={bike3}
              alt="Third slide"
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CustomCarousel;
