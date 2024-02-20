
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Maps.css';
import MapsData from '../data/MapsData.jsx'


function Maps(){

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    return( 
        <div className="slider-container">
          <Slider {...settings}>
        {MapsData.map((maps, index) => ( 
            <div className="card-container">
          <div className="card-wraper">
              <img className="image-cards"
                src={maps.imageSrc}
                alt={maps.alt}
              >
              </img>
            </div>
          <div className="icon-container">
                <img 
                className="icon" 
                src={maps.icon}
                alt={maps.iconAlt}>
                </img>
            </div>
            <h2 className="title-images">{maps.title}</h2>
            <h3 className="description-images">{maps.description}</h3>
          </div>
        ))}
        </Slider>
      </div>
  );
}


export default Maps

