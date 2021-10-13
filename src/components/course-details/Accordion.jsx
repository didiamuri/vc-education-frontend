import React, { Component } from 'react'
import AccordionItem from './AccordionItem'
import { accordionData } from './Content'

export class Accordion extends Component {
    render() {
        return (
            <div className="container mt-5">
                {accordionData.map(({ id, title, subTitle, content }) => (
                    <AccordionItem key={id} id={id} title={title} subTitle={subTitle} content={content} />
                ))}
            </div>
        )
    }
}

export default Accordion