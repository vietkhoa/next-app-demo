import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';

import carousels from '../../datas/carousels.json';

import Slider from 'react-slick';


export default class Section1 extends React.Component {

  renderCarousels = () => {

    return carousels.carousels.map(item => (
        <img src={item.src} />
    ))
  }

  render() {
    const settings = {
      dots: true,
      dotsClass: 'slick-dots slick-thumb',
      infinite: false,
      speed: 500,
      focusOnSelect: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    };
    return (

        <div className="row">
        <Slider {...settings}>
        {this.renderCarousels()}
      </Slider>
      </div>

    )
  }
}


