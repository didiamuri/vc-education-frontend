import React, { Component, Fragment } from 'react';
import blue_logo from '../../assets/img/brightmind-blue-logo.png';

export class LoginView extends Component {

    componentDidMount() {
        document.body.style.backgroundColor = '#000';
    }

    render() {
        return (
            <Fragment>
                <div className="bg-white">
                    <div className="login-bg pt-5">
                        <div className="card text-center auth-card">
                            <div className="card-body">
                                <img className="mt-3" src={blue_logo} alt="" width="220" />
                                <div className="login-title-content pt-5">
                                    <h3>Log In to Brightmind</h3>
                                    <p>Enter your email and password below</p>
                                </div>
                                <div className="auth-form mt-3">
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">EMAIL</label>
                                        <input type="email" className="form-control" id="email" placeholder="Email address"></input>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="password" className="form-label">PASSWORD</label><span className="forgot-pwd"><a href="/">Forgot password?</a></span>
                                        <input type="password" className="form-control" id="password" placeholder="Password"></input>
                                    </div>
                                    <div className="form-check form-switch mb-5">
                                        <input className="form-check-input" type="checkbox" role="switch" id="rememberSwitch"></input>
                                        <label className="form-check-label" htmlFor="rememberSwitch">Remember me</label>
                                    </div>
                                    <div className="d-grid gap-1">
                                        <button className="btn btn-primary" type="button">Log In</button>
                                    </div>
                                    <p>Don't have an account? <a href="/signup">Sign up</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default LoginView
