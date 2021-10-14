import React, { Component, Fragment } from 'react';
import image from '../../assets/img/question.png';

export class Questions extends Component {
    render() {
        return (
            <Fragment>
                <div className="question-container mt-5 mb-2">
                    <div className="card bg-dark-custom">
                        <div className="card-body custom-card-body">
                            <span className="question-number">1</span>
                            <div className="question-content text-center text-white">
                                <p>Which theory describes the arrangement and movement of particles in solids, liquids and gases?</p>
                                <img src={image} alt="" />
                                <div className="response mt-3">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Theory of relativity
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"></input>
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            Kinetic Theory
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"></input>
                                        <label class="form-check-label" for="flexRadioDefault3">
                                            Atomic Theory
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="question-container mb-2">
                    <div className="card bg-dark-custom">
                        <div className="card-body custom-card-body">
                            <span className="question-number">2</span>
                            <div className="question-content text-center text-white">
                                <p>In which state of matter are the particles mostly touching but arranged in a random way?</p>
                                <div className="response mt-3">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Solid
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"></input>
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            Liquid
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"></input>
                                        <label class="form-check-label" for="flexRadioDefault3">
                                            Gas
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="question-container mb-2">
                    <div className="card bg-dark-custom">
                        <div className="card-body custom-card-body">
                            <span className="question-number">3</span>
                            <div className="question-content text-center text-white">
                                <p>In which state of matter do the particles have the most energy?</p>
                                <div className="response mt-3">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="quiz1"></input>
                                        <label class="form-check-label" for="quiz1">
                                            Solid
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="quiz2"></input>
                                        <label class="form-check-label" for="quiz2">
                                            Liquid
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="quiz3"></input>
                                        <label class="form-check-label" for="quiz3">
                                            Gas
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="btn btn-primary mt-2">Check Score <i className="bi bi-chevron-right"></i> </button>
            </Fragment>
        )
    }
}

export default Questions
