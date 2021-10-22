import React, { useContext, useEffect } from 'react'
import GradeContext from '../../context/grade/gradeContext';
import AccordionItem from './AccordionItem'
import { accordionData } from './Content'

const Accordion = () => {

    const gradeContext = useContext(GradeContext);
    const { chapters } = gradeContext;

    useEffect(() => {
        console.log(chapters);
        chapters.map(chap => {
            console.log(chap);
        })
    }, []);

    return (
        <div className="container mt-5">
            {accordionData.map(({ id, title, subTitle, content }) => (
                <AccordionItem key={id} id={id} title={title} subTitle={subTitle} content={content} />
            ))}
        </div>
    )

}

export default Accordion


{/* <div className="container mt-5">
            {accordionData.map(({ id, title, subTitle, content }) => (
                <AccordionItem key={id} id={id} title={title} subTitle={subTitle} content={content} />
            ))}
        </div> */}