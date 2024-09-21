import React from 'react';


type ItemType = {
    title: string
    value: any
}

export type SelectType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = ({value, onChange, items}: SelectType) => {

    const selectedItem = items.find(i => i.value === value);

    return (
        <div>
            <select>
                <option value="">Item 1</option>
                <option value="">Item 2</option>
                <option value="">Item 3</option>
            </select>
            <h3>{selectedItem && selectedItem.title}</h3>
            {items.map(i => <div key={i.value}>{i.title}</div>)}
        </div>
    );
};























