import React, { Component, Fragment } from 'react';
import vid5 from '../../assets/img/vid5.png';

export class Accordion extends Component {
    render() {
        return (
            <Fragment>
                <div className="container mt-5">
                    <div className="card bg-dark-custom">
                        <div className="card-body custom-card-body">
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img className="accordion-img" src={vid5} alt="" />
                                        </div>
                                        <div className="col-md-8 pl-70">
                                            <h3 className="accordion-title">THE PARTICLE NATURE OF MATTER</h3>
                                            <p className="accordion-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dignissim commodo justo, sit amet sodales neque ornare sed. Aenean at pellentesque lacus. Maecenas vulputate ipsum quis commodo dictum. Maecenas commodo libero</p>
                                            <button className="btn btn-primary circle-btn">Take Quiz</button>
                                        </div>
                                    </div>
                                    <i className="bi bi-caret-down-fill text-white"></i>
                                    <i className="bi bi-dash-lg text-white"></i>
                                </div>
                                <div className="accordion-content">
                                    <p>States of Matter</p>
                                    <p>Brownian Motion</p>
                                    <p>Diffusion</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-dark-custom mt-4">
                        <div className="card-body custom-card-body">
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img className="accordion-img" src={vid5} alt="" />
                                        </div>
                                        <div className="col-md-8 pl-70">
                                            <h3 className="accordion-title">EXPERIMENTAL TECHNIQUES</h3>
                                            <p className="accordion-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dignissim commodo justo, sit amet sodales neque ornare sed. Aenean at pellentesque lacus. Maecenas vulputate ipsum quis commodo dictum. Maecenas commodo libero</p>
                                            <button className="btn btn-primary circle-btn">Take Quiz</button>
                                        </div>
                                    </div>
                                    <i className="bi bi-caret-down-fill text-white"></i>
                                    <i className="bi bi-dash-lg text-white"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-dark-custom mt-4">
                        <div className="card-body custom-card-body">
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img className="accordion-img" src={vid5} alt="" />
                                        </div>
                                        <div className="col-md-8 pl-70">
                                            <h3 className="accordion-title">ATOMS, ELEMENTS & COMPOUNDS</h3>
                                            <p className="accordion-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dignissim commodo justo, sit amet sodales neque ornare sed. Aenean at pellentesque lacus. Maecenas vulputate ipsum quis commodo dictum. Maecenas commodo libero</p>
                                            <button className="btn btn-primary circle-btn">Take Quiz</button>
                                        </div>
                                    </div>
                                    <i className="bi bi-caret-down-fill text-white"></i>
                                    <i className="bi bi-dash-lg text-white"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Accordion
