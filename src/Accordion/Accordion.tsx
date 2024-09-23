import React from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionType = {
    titleValue: string;
    collapsed: boolean;
    onChange: () => void
    items: ItemType[]
    onClick: (value: any) => void
}

export const Accordion = React.memo(
    function Accordion({titleValue, collapsed, onChange, items, onClick}: AccordionType) {
        console.log('Accordion render')
        return (
            <div><AccordionTitle title={titleValue} onChange={onChange}/>
                {!collapsed && <div><AccordionBody items={items} onClick={onClick}/></div>}
            </div>
        )
    }
)

type AccordionTitleType = {
    title: string
    onChange: () => void
}

export const AccordionTitle = React.memo(
    function AccordionTitle({title, onChange}: AccordionTitleType) {
        console.log('Accordion title render')
        return (
            <h2 style={{cursor: 'pointer'}} onClick={(event) => onChange()}>{title}</h2>
        )
    }
)

type AccordionBodyType = {
    items: ItemType[]
    onClick: (value: any) => void
}

export const AccordionBody = React.memo(
    function AccordionBody({items, onClick}: AccordionBodyType) {
        console.log('Accordion body render')
        return (
            <ul>
                {items.map((i, index) => <li onClick={() => {
                    onClick(i.value)
                }} key={index}>{i.title}</li>)}
            </ul>
        )
    })
























