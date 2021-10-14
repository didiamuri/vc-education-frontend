import React, { Component, Fragment } from 'react';
import vid5 from '../../assets/img/vid5.png';
import Questions from './Questions';

export class MainQuizPage extends Component {
    render() {
        return (
            <Fragment>
                <div className="container mt-100 mb-5">
                    <div className="card bg-dark-custom">
                        <div className="card-body custom-card-body">
                            <div className="row">
                                <div className="col-md-4 col-sm-6 col-12">
                                    <img className="accordion-img" src={vid5} alt="" />
                                </div>
                                <div className="col-md-8 col-sm-6 col-12">
                                    <div className="content py-0">
                                        <h3 className="mt-0 pb-3">QUIZ - THE PARTICLE NATURE OF MATTER </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dignissim commodo justo, sit amet sodales neque ornare sed. Aenean at pellentesque lacus. Maecenas vulputate ipsum quis commodo dictum. Maecenas commodo libero</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Questions />
                </div>
            </Fragment>
        )
    }
}

export default MainQuizPage
