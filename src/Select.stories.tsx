import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Select} from "./Select";

export default {
    title: "Select stories",
    component: Select,
}

export const SelectWithValue = () => {
    const [value, setValue] = useState('2')

    return <>
        <Select value={value} onChange={setValue} items={[
            {value: '1', title: 'Item 1'},
            {value: '2', title: 'Item 2'},
            {value: '3', title: 'Item 3'},
        ]}/>
    </>
}

export const SelectWithoutValue = () => {
    const [value, setValue] = useState('2')
    return <>
        <Select value={value} onChange={setValue} items={[
            {value: '1', title: 'Item 1'},
            {value: '2', title: 'Item 2'},
            {value: '3', title: 'Item 3'},
        ]}/>
    </>
}