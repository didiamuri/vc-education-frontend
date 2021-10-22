import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import GradeContext from '../../context/grade/gradeContext';

const Course = ({ chapter }) => {

    // const gradeContext = useContext(GradeContext);
    // const { getArtcileByChap, articles } = gradeContext;

    const [articless, setArticless] = useState([]);

    const history = useHistory();
    const [isActive, setIsActive] = useState(false);
    const viewVideo = (id, title, video, desc) => {
        history.push("/video", { id, title, video, desc });
    }

    const goToArticle = (article) => {
        history.push("/video", article);
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`/api/chapters/${chapter._id}/articles`);
            setArticless(res.data.data);
        }

        fetchData();

    }, []);

    return (
        <div className="card bg-dark-custom mb-3">
            <div className="card-body custom-card-body">
                <div className="accordion-item">
                    <div className="accordion-header">
                        <div className="row">
                            <div className="col-md-4">
                                <img className="accordion-img" src={chapter?.image} alt="" />
                            </div>
                            <div className="col-md-8 pl-70">
                                <h3 className="accordion-title">{chapter.title}</h3>
                                <p className="accordion-subtitle">{chapter.description}</p>
                                <Link to="/quiz" className="btn btn-primary circle-btn">Take Quiz</Link>
                            </div>
                        </div>

                        {
                            articless.length > 1 && <div className="accordion-icon" onClick={() => setIsActive(!isActive)}>
                                <i className={isActive ? 'bi bi-dash-lg text-white' : 'bi bi-caret-down-fill text-white'}></i>
                            </div>
                        }

                        {
                            articless.length < 1 && <em style={{"color":"red", "fontSize":"0.6em"}}>No content</em>
                        }

                    </div>
                    {isActive && <div className="accordion-content">
                        {articless.map((article, key) => (
                            <p key={article._id} onClick={() => goToArticle(article)}>{article.title}</p>
                        ))}
                    </div>}

                    {/* {isActive && <div className="accordion-content">
                        {articles.map(({ contentId, contentTite, videoUrl, description }) => (
                            <p key={contentId} onClick={() => viewVideo(contentId, contentTite, videoUrl, description)}>{contentTite}</p>
                        ))}
                    </div>} */}

                </div>
            </div>
        </div>
    )
}

export default Course
