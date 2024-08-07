import React from "react";

type AccordionType = {
    titleValue: string;
    collapsed: boolean;
}

export function Accordion({titleValue, collapsed}: AccordionType) {
    return (
        <div> {collapsed
            ? <AccordionTitle title={titleValue}/>
            : <><AccordionTitle title={titleValue}/><AccordionBody/></>}
        </div>
    )
}

type AccordionTitleType = {
    title: string
}

function AccordionTitle({title}: AccordionTitleType) {
    return (
        <h2>{title}</h2>
    )
}

function AccordionBody() {
    return (
        <ul>
            <div>Menu</div>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
