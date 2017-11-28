import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import CardFilm from '../CardFilm'
import Link from 'next/link'
import films from "../../datas/category1"
import Slider from 'react-slick';


export default class Section3 extends React.Component {


    renderFilms() {

        return this.props.movies.category1.map(item => (
            <div>
                <CardFilm key={item.title} item={item} />
            </div>
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
        };
        return (
            <div className="row" style={{ backgroundColor: "#222222" }}>
                <div className="col-4">

                </div>
                <div className="col-4">
                    <Slider  {...settings}>
                        {this.renderFilms()}
                    </Slider>
                </div>
                <div className="col-4">
                </div>
            </div>
        )
    }
}

