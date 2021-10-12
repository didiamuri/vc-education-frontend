import React, { Component, Fragment } from 'react'
import Slider from 'react-slick';

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
            rows: 1
        };
        return (
            <Fragment>
                <div className="container mt-5">
                    <h3 className="title">RECENTLY WATCHED</h3>
                    <Slider {...settings} className>
                        <div>
                            <div className="slide-list-container">
                                <img src={`${process.env.PUBLIC_URL}/assets/img/vid1.png`} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="slide-list-container">
                                <img src={`${process.env.PUBLIC_URL}/assets/img/vid2.png`} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="slide-list-container">
                                <img src={`${process.env.PUBLIC_URL}/assets/img/vid3.png`} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="slide-list-container">
                                <img src={`${process.env.PUBLIC_URL}/assets/img/vid4.png`} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="slide-list-container">
                                <img src={`${process.env.PUBLIC_URL}/assets/img/vid4.png`} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="slide-list-container">
                                <img src={`${process.env.PUBLIC_URL}/assets/img/vid2.png`} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="slide-list-container">
                                <img src={`${process.env.PUBLIC_URL}/assets/img/vid3.png`} alt="" />
                            </div>
                        </div>
                    </Slider>
                </div>
            </Fragment>
        )
    }
}

export default Recently
