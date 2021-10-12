import React, { Component, Fragment } from 'react'

export class SearchBar extends Component {
    render() {
        return (
            <Fragment>
                <div className="container mt-5">
                    <div class="row">
                        <div class="col-md-5">
                            <div class="input-group">
                                <input class="form-control border-end-0 border" type="search" placeholder="Search by Grade, Subject or Video" id="example-search-input"></input>
                                <span class="input-group-append">
                                    <button class="btn btn-outline-secondary bg-white custom-btn border-bottom-0 border ms-n5" type="button">
                                        <i class="bi bi-search"></i>
                                    </button>
                                </span>
                            </div>
                        </div>
                        <div className="col-md-5"></div>
                        <div class="col-md-2 float-end">
                            <select class="form-select" aria-label="Default select example">
                                <option value="1">CAPS</option>
                                <option value="2">CIE</option>
                                <option value="3">IEB</option>
                            </select>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default SearchBar
