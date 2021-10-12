import React, { Component, Fragment } from 'react'

export class Footer extends Component {
    render() {
        return (
            <Fragment>
                <div className="border-bottom mt-200"></div>
                <div className="container">
                    <footer className="mt-5 mb-5">
                        <h1 className="text-center title">Brightmind</h1>
                        <div className="row">
                            <div className="col-md-7">
                                <ul className="nav justify-content-center pb-3 mb-3">
                                    <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Feedback</a></li>
                                    <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Help</a></li>
                                    <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">FAQs</a></li>
                                </ul>
                            </div>
                            <div className="col-md-5">
                                <ul className="nav justify-content-left pb-3 mb-3">
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
