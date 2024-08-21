import React from "react";

type AccordionType = {
    titleValue: string;
    collapsed: boolean;
    onChange: () => void
}

export function Accordion({titleValue, collapsed,onChange}: AccordionType) {
    return (
        <div><AccordionTitle title={titleValue} onChange={onChange}/>
            {!collapsed && <div><AccordionBody/></div>}
        </div>
    )
}

type AccordionTitleType = {
    title: string
    onChange: () => void
}

function AccordionTitle({title,onChange}: AccordionTitleType) {
    return (
        <h2 style={{cursor: 'pointer'}} onClick={onChange}>{title}</h2>
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
