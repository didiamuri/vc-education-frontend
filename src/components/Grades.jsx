import React, { Component, Fragment } from 'react'
import Slider from 'react-slick';
import thumbnail1 from '../assets/img/thumbnail1.png';
import thumbnail2 from '../assets/img/thumbnail2.png';

export class Grades extends Component {
    render() {
        const settings = {
            dots: false,
            arrows: true,
            autoplay: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
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
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <Fragment>
                <div className="container linear mt-4 mb-2">
                    <h2 className="title">GRADE 12</h2>
                    <Slider {...settings} className>
                        <div>
                            <div className="slide-grade-list-container">
                                <img src={thumbnail1} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="slide-grade-list-container">
                                <img src={thumbnail2} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="slide-grade-list-container">
                                <img src={thumbnail1} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="slide-grade-list-container">
                                <img src={thumbnail2} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="slide-grade-list-container">
                                <img src={thumbnail2} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="slide-grade-list-container">
                                <img src={thumbnail1} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="slide-grade-list-container">
                                <img src={thumbnail1} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="slide-grade-list-container">
                                <img src={thumbnail2} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="slide-grade-list-container">
                                <img src={thumbnail1} alt="" />
                            </div>
                        </div>
                    </Slider>
                </div>
            </Fragment>
        )
    }
}

export default Grades
