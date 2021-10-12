import React, { Component, Fragment } from 'react'
import Slider from 'react-slick';

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
                            <img src={`${process.env.PUBLIC_URL}/assets/img/slide1.png`} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="slide-container">
                            <div className="slide-image">
                                <img src={`${process.env.PUBLIC_URL}/assets/img/slide2.png`} alt="" />
                            </div>
                        </div>
                    </div>
                </Slider>
            </Fragment>
        )
    }
}

export default Carousel
