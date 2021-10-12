import React, { Component, Fragment } from 'react'
import Carousel from './Carousel'
import Grade10 from './Grade10'
import Grade11 from './Grade11'
import Grades from './Grades'
import Recently from './Recently'
import SearchBar from './SearchBar'

export class Home extends Component {
    render() {
        return (
            <Fragment>
                <Carousel />
                <SearchBar />
                <Recently />
                <Grades />
                <Grade11 />
                <Grade10 />
            </Fragment>
        )
    }
}

export default Home
