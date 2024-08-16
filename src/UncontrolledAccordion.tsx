import React, {useState} from "react";

type UncontrolledAccordionType = {
    titleValue: string;
}

export function UncontrolledAccordion({titleValue}: UncontrolledAccordionType) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div>
            <div><AccordionTitle title={titleValue}/>
                <button onClick={()=> setCollapsed(!collapsed)}>TOGGLE</button>
                {!collapsed && <div><AccordionBody/></div>}
            </div>
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
