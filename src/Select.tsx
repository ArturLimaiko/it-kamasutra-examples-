import React from 'react';
import {RatingValueType, Star} from "./Rating";


type ItemType ={
    title:string
    value: any
}

export type SelectType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = ({value,onChange,items}:SelectType) => {
    return (
        <div>
            {/*<div>{пробежаться по всем items мапом - найти в них тот  айтемс в котором совпадает  value и отобразить title нужного items через find}</div>*/}
            {/*{items.map(i => <div>{i.title}</div>)}*/}
        </div>
    );
};























