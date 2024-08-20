import React, {useState} from "react";

type UncontrolledAccordionType = {
    titleValue: string;
}

export function UncontrolledAccordion({titleValue}: UncontrolledAccordionType) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div>
            <div ><AccordionTitle title={titleValue} onClick={()=> setCollapsed(!collapsed)}/>
                {!collapsed && <div><AccordionBody/></div>}
            </div>
        </div>
    )
}

type AccordionTitleType = {
    title: string
    onClick: () => void
}

function AccordionTitle({title,onClick}: AccordionTitleType) {
    return (
        <h2 style={{cursor:'pointer'}} onClick={()=> {onClick()}}>{title}</h2>
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
