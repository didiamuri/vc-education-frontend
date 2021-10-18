import React, { Component } from 'react';
import { Fragment } from 'react';
import logo from '../../assets/img/brightmind-logo.png';

export class Header extends Component {
    render() {
        return (
            <Fragment>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/">
                                <img src={logo} alt="" width="150" />
                            </a>
                            <a className="btn btn-primary circle-btn" href="/login">SIGN IN</a>
                        </div>
                    </nav>
                </header>
            </Fragment>
        )
    }
}

export default Header
