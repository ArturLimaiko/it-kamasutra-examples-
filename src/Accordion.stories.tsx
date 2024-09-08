// import type {Meta, StoryObj} from '@storybook/react';

import {action} from '@storybook/addon-actions';

import {Accordion} from "./Accordion";
import React, {useState} from "react";

export default {
    title: 'Accordion',
    component: Accordion,
}

const onChangeHandler = action('onChange')

export const CollapsedAccordion = () => {
    return <Accordion titleValue='Accordion collapsed'
                      collapsed={true}
                      onChange={onChangeHandler}/>
}

export const OpenedAccordion = () => {
    return <Accordion titleValue='Accordion opened'
                      collapsed={false}
                      onChange={onChangeHandler}/>
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion titleValue='Accordion'
                      collapsed={collapsed}
                      onChange={() => {
                          setCollapsed(!collapsed)
                      }}/>
}

















