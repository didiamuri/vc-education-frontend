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
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="quiz11"></input>
                                        <label class="form-check-label" for="quiz11">
                                            Theory of relativity
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="quiz12"></input>
                                        <label class="form-check-label" for="quiz12">
                                            Kinetic Theory
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="quiz13"></input>
                                        <label class="form-check-label" for="quiz13">
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
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="quiz21"></input>
                                        <label class="form-check-label" for="quiz21">
                                            Solid
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="quiz22"></input>
                                        <label class="form-check-label" for="quiz22">
                                            Liquid
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="quiz23"></input>
                                        <label class="form-check-label" for="quiz23">
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
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="quiz31"></input>
                                        <label class="form-check-label" for="quiz31">
                                            Solid
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="quiz32"></input>
                                        <label class="form-check-label" for="quiz32">
                                            Liquid
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="quiz33"></input>
                                        <label class="form-check-label" for="quiz33">
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
