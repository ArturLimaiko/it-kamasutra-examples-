import React from "react";

type ItemType ={
    title:string
    value: any
}

type AccordionType = {
    titleValue: string;
    collapsed: boolean;
    onChange: () => void
    items: ItemType[]
    onClick:(value:any)=>void
}

export function Accordion({titleValue, collapsed, onChange, items,onClick}: AccordionType) {
    return (
        <div><AccordionTitle title={titleValue} onChange={onChange}/>
            {!collapsed && <div><AccordionBody items={items} onClick={onClick}/></div>}
        </div>
    )
}

type AccordionTitleType = {
    title: string
    onChange: () => void
}

function AccordionTitle({title, onChange}: AccordionTitleType) {
    return (
        <h2 style={{cursor: 'pointer'}} onClick={(event) => onChange()}>{title}</h2>
    )
}

type AccordionBodyType = {
    items: ItemType[]
    onClick:(value:any)=>void
}

function AccordionBody({items,onClick}: AccordionBodyType) {
    return (
        <ul>
            {items.map((i,index) => <li onClick={()=>{onClick(i.value)}} key={index}>{i.title}</li>)}
        </ul>
    )
}
























