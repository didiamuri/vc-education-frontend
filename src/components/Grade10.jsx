import React, { Component, Fragment } from 'react'
import Slider from 'react-slick';

export class Grade10 extends Component {
    render() {
        const settings = {
            dots: false,
            arrows: true,
            autoplay: false,
            infinite: true,
            speed: 500,
            slidesToShow: 7,
            slidesToScroll: 9,
            adaptiveHeight: false,
            rows: 1
        };
        return (
            <Fragment>
                <div className="container mt-4 mb-2">
                    <h3 className="title">GRADE 10</h3>
                    <Slider {...settings} className>
                        <div>
                            <div className="slide-grade-list-container">
                                <img src={`${process.env.PUBLIC_URL}/assets/img/thumbnail2.png`} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="slide-grade-list-container">
                                <img src={`${process.env.PUBLIC_URL}/assets/img/thumbnail1.png`} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="slide-grade-list-container">
                                <img src={`${process.env.PUBLIC_URL}/assets/img/thumbnail1.png`} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="slide-grade-list-container">
                                <img src={`${process.env.PUBLIC_URL}/assets/img/thumbnail2.png`} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="slide-grade-list-container">
                                <img src={`${process.env.PUBLIC_URL}/assets/img/thumbnail1.png`} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="slide-grade-list-container">
                                <img src={`${process.env.PUBLIC_URL}/assets/img/thumbnail2.png`} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="slide-grade-list-container">
                                <img src={`${process.env.PUBLIC_URL}/assets/img/thumbnail1.png`} alt="" />
                            </div>
                        </div>
                    </Slider>
                </div>
            </Fragment>
        )
    }
}

export default Grade10
