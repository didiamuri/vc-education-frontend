import React, { Component, Fragment } from 'react';
import blue_logo from '../../assets/img/brightmind-blue-logo.png';

export class SignupView extends Component {

    componentDidMount() {
        document.body.style.backgroundColor = '#fff';
    }

    render() {
        return (
            <Fragment>
                <div className="bg-white">
                    <div className="auth-bg">
                        <div className="title-content text-center text-white pt-5">
                            <h2>Welcome!</h2>
                            <p>High quality exam prep that is more effective than private tutoring available 24/7 at a fraction of the cost</p>
                        </div>
                        <div className="card text-center auth-card">
                            <div className="card-body">
                                <h4>Register Now</h4>
                                <img className="mt-3" src={blue_logo} alt="" width="180" />
                                <div className="auth-form">
                                    <div className="mb-2">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="name" placeholder="Your full name"></input>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="email" placeholder="Your email address"></input>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="password" placeholder="Your password"></input>
                                    </div>
                                    <div className="d-grid gap-1">
                                        <button className="btn btn-primary" type="button">SIGN UP</button>
                                    </div>
                                    <p>Already have an account? <a href="/login">Sign in</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default SignupView
