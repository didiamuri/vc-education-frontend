import React, { Component, Fragment } from 'react'
import Accordion from './Accordion';

import vid4 from '../../assets/img/vid4.png';

export class Main extends Component {
    render() {
        return (
            <Fragment>
                <div className="container mt-100">
                    <div className="card bg-dark-custom">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-12">
                                    <div className="content">
                                        <h3 className="mb-5">CHEMISTRY</h3>
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dignissim commodo justo, sit amet sodales neque ornare sed. Aenean at pellentesque lacus. Maecenas vulputate ipsum quis commodo dictum. Maecenas commodo libero</span>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-12">
                                    <div className="img-content">
                                        <img src={vid4} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Accordion />
            </Fragment>
        )
    }
}

export default Main
