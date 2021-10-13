import React, { Component, Fragment } from 'react'
import Slider from 'react-slick';
import vid1 from '../assets/img/vid1.png';
import vid2 from '../assets/img/vid2.png';
import vid3 from '../assets/img/vid3.png';
import vid4 from '../assets/img/vid4.png';

export class Recently extends Component {
    render() {
        const settings = {
            dots: false,
            arrows: true,
            autoplay: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            adaptiveHeight: false,
            rows: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <Fragment>
                <div className="container mt-5">
                    <h3 className="title">RECENTLY WATCHED</h3>
                    <Slider {...settings} className>
                        <div>
                            <div className="slide-list-container">
                                <img src={vid1} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="slide-list-container">
                                <img src={vid2} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="slide-list-container">
                                <img src={vid3} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="slide-list-container">
                                <img src={vid4} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="slide-list-container">
                                <img src={vid4} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="slide-list-container">
                                <img src={vid2} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="slide-list-container">
                                <img src={vid3} alt="" />
                            </div>
                        </div>
                    </Slider>
                </div>
            </Fragment>
        )
    }
}

export default Recently
