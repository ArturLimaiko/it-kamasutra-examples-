import React, {useReducer} from "react";
import {reducer, TOGGLE_CONSTANT} from "./Reducer";

type UncontrolledAccordionType = {
    titleValue: string;
}

export function UncontrolledAccordion({titleValue}: UncontrolledAccordionType) {
    const [state, dispatch] = useReducer(reducer, {collapsed: false});

    return (
        <div>
            <div >
                {/*<AccordionTitle title={titleValue} onClick={()=> setCollapsed(!collapsed)}/>*/}
                {/*в dispatch отправили экшн - при нажатии мы диспатчим инструкцию*/}
                <AccordionTitle title={titleValue} onClick={()=> dispatch({type: TOGGLE_CONSTANT})}/>
                {!state.collapsed && <div><AccordionBody/></div>}
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
