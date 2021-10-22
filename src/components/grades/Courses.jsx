import React, { useContext, useEffect } from 'react'
import GradeContext from '../../context/grade/gradeContext';
import Course from './Course';
// import AccordionItem from '../subject-page/AccordionItem';
// import { accordionData } from '../subject-page/Content';
// import Course from './Course';

const Courses = () => {

    const gradeContext = useContext(GradeContext);
    const { chapters } = gradeContext;

    useEffect(() => {
        console.log('chap detailled ', chapters);
        chapters.map(chap => {
            console.log(chap);
        })
    }, []);
    if (chapters.length > 0) {
        return (

            <div className="container mt-5">
                {chapters.map((chapter) => (
                    <Course chapter={chapter} key={chapter._id} />
                ))}
            </div>
        )
    } else {
        return (
            <div className="container mt-5">
                <h1 className="text-center">No chapters for this couse, in process...</h1>
            </div>
        )
    }



}

export default Courses;