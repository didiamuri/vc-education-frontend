import React, { Component, Fragment } from 'react';
import logo from '../../assets/img/brightmind-logo.png';

export class Footer extends Component {
    render() {
        return (
            <Fragment>
                <div className="border-bottom mt-200"></div>
                <div className="container">
                    <footer className="mt-5 mb-5">
                        <div className="logo text-center mb-4">
                            <img src={logo} alt="" />
                        </div>
                        <div className="row">
                            <div className="col-md-7 col-sm-6 col-6">
                                <ul className="nav justify-content-center mb-3">
                                    <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Feedback</a></li>
                                    <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Help</a></li>
                                    <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">FAQs</a></li>
                                </ul>
                            </div>
                            <div className="col-md-5 col-sm-6 col-6">
                                <ul className="nav justify-content-left footer-justify-content mb-3">
                                    <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">FOLLOW ON </a></li>
                                    <li className="nav-item"><a href="/" target="_blank" className="nav-link px-2 text-muted"><i className="bi bi-facebook"></i></a></li>
                                    <li className="nav-item"><a href="/" target="_blank" className="nav-link px-2 text-muted"><i className="bi bi-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-center text-muted">&copy; 2021 All rights reserved</p>
                    </footer>
                </div>
            </Fragment>
        )
    }
}

export default Footer
