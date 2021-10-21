import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import vid5 from '../../assets/img/vid5.png';

const AccordionItem = ({ id, title, subTitle, content }) => {

    const history = useHistory();
    const [isActive, setIsActive] = useState(false);
    const viewVideo = (id, title, video, desc) => {
        history.push("/app/video", { id, title, video, desc });
    }

    return (
        <div className="card bg-dark-custom mb-3">
            <div className="card-body custom-card-body">
                <div className="accordion-item">
                    <div className="accordion-header">
                        <div className="row">
                            <div className="col-md-4">
                                <img className="accordion-img" src={vid5} alt="" />
                            </div>
                            <div className="col-md-8 pl-70">
                                <h3 className="accordion-title">{title}</h3>
                                <p className="accordion-subtitle">{subTitle}</p>
                                <Link to="/app/quiz" className="btn btn-primary circle-btn">Take Quiz</Link>
                            </div>
                        </div>
                        <div className="accordion-icon" onClick={() => setIsActive(!isActive)}>
                            <i className={isActive ? 'bi bi-dash-lg text-white' : 'bi bi-caret-down-fill text-white'}></i>
                        </div>
                    </div>
                    {isActive && <div className="accordion-content">
                        {content.map(({ contentId, contentTite, videoUrl, description }) => (
                            <p key={contentId} onClick={() => viewVideo(contentId, contentTite, videoUrl, description)}>{contentTite}</p>
                        ))}
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default AccordionItem
