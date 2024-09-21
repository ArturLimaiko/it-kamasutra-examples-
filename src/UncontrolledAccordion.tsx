import React, {useReducer} from "react";

type UncontrolledAccordionType = {
    titleValue: string;
}

type ActionType = {
    type: string
}

const reducer = (state: boolean, action:ActionType) => {
    //тут просто название инструкции - обязательно должно совпадать - если совпадает 'TOGGLE-COLLAPSED', то
    if(action.type === 'TOGGLE-COLLAPSED'){
        // то тогда верни противоположное значение state
        return !state
    }
    return state
}

export function UncontrolledAccordion({titleValue}: UncontrolledAccordionType) {
    const [collapsed, dispatch] = useReducer(reducer, false);

    return (
        <div>
            <div >
                {/*<AccordionTitle title={titleValue} onClick={()=> setCollapsed(!collapsed)}/>*/}
                {/*в dispatch отправили экшн - при нажатии мы диспатчим инструкцию*/}
                <AccordionTitle title={titleValue} onClick={()=> dispatch({type: 'TOGGLE-COLLAPSED'})}/>
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
