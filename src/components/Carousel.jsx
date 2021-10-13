import React, { Component, Fragment } from 'react'
import Slider from 'react-slick';
import slide1 from '../assets/img/slide1.png';
import slide2 from '../assets/img/slide2.png';

export class Carousel extends Component {
    render() {
        const settings = {
            dots: false,
            arrows: true,
            autoplay: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            rows: 1
        };
        return (
            <Fragment>
                <Slider {...settings} className>
                    <div>
                        <div className="slide-container">
                            <img src={slide1} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="slide-container">
                            <div className="slide-image">
                                <img src={slide2} alt="" />
                            </div>
                        </div>
                    </div>
                </Slider>
            </Fragment>
        )
    }
}

export default Carousel
