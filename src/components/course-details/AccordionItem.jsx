import React, { useState } from 'react';
import vid5 from '../../assets/img/vid5.png';

const AccordionItem = ({ id, title, subTitle, content }) => {

    const [isActive, setIsActive] = useState(false);

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
                                <button className="btn btn-primary circle-btn">Take Quiz</button>
                            </div>
                        </div>
                        <div className="accordion-icon" onClick={() => setIsActive(!isActive)}>
                            <i className={isActive ? 'bi bi-dash-lg text-white' : 'bi bi-caret-down-fill text-white'}></i>
                        </div>
                    </div>
                    {isActive && <div className="accordion-content">
                        {content.map(({ contentId, contentTite }) => (
                            <p>{contentTite}</p>
                        ))}
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default AccordionItem
