import React, { Component } from 'react'
import { Fragment } from 'react'

export class Header extends Component {
    render() {
        return (
            <Fragment>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/">Brightmind</a>
                            <button className="btn btn-primary circle-btn">SIGN IN</button>
                        </div>
                    </nav>
                </header>
            </Fragment>
        )
    }
}

export default Header
