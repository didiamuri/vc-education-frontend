import { Fragment, useEffect, useContext, useState } from 'react'
import Accordion from './Accordion';
import vid4 from '../../assets/img/vid4.png';
import { useParams } from 'react-router';
import GradeContext from '../../context/grade/gradeContext';
import axios from 'axios';
import Courses from '../grades/Courses';

const MainSubjectPage = ({ history }) => {

    const gradeContext = useContext(GradeContext);
    const { course, getChaptersByCourse, chapters, getCourse } = gradeContext;
    const { courseId } = useParams();

    // const [course, setCourse] = useState(null)

    useEffect(() => {

        getCourse(courseId);
        // const res = await axios.get(`/api/courses/${courseId}`);
        // setCourse(res.data.data[0]);
        // console.log('course- - ', res.data.data[0]);
        window.scrollTo(0, 0);
        console.log('main course - ', course);

        getChaptersByCourse(courseId);
        console.log('chapters - ', chapters);


    }, []);

    return (
        <Fragment>
            <div className="container mt-100">
                <div className="card bg-dark-custom">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-12">
                                <div className="content">
                                    <h3 className="mb-5">{course?.title}</h3>
                                    <span>{course?.description}</span>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-12">
                                <div className="img-content">
                                    <img src={course?.image} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Accordion /> */}
            <Courses />
        </Fragment>
    )
}

export default MainSubjectPage
