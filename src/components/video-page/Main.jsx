import React, { Fragment, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useLocation } from 'react-router';

const MainVideoPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const location = useLocation();

    return (
        <Fragment>
            <div className="container mt-100">
                <div className="video-container">
                    <div className='player-wrapper'>
                        <ReactPlayer
                            className='react-player'
                            url={location.state.video}
                            muted={false}
                            playing={true}
                            width='100%'
                            controls={true}
                            light={true}
                        />
                    </div>
                </div>
                <div className="video-info">
                    <h3> {location.state.title} </h3>
                    <p> {location.state.desc} </p>
                </div>
            </div>
        </Fragment>
    )
}

export default MainVideoPage
