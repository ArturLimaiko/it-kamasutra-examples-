// import type {Meta, StoryObj} from '@storybook/react';

import {action} from '@storybook/addon-actions';

import {Accordion} from "./Accordion";
import React, {useState} from "react";

export default {
    title: 'Accordion',
    component: Accordion,
}

const onChangeHandler = action('onChange')
const onClickCallback = action('some item was clicked');

export const CollapsedAccordion = () => {
    return <Accordion titleValue='Accordion collapsed'
                      collapsed={true}
                      onChange={onChangeHandler}
                      items={[]}
                      onClick={onClickCallback}
    />
}

export const OpenedAccordion = () => {
    return <Accordion titleValue='Accordion opened'
                      collapsed={false}
                      onClick={onClickCallback}
                      onChange={onChangeHandler} items={[{title: 'Art', value: 2}, {title:'Tonya',value: 3}, {title: 'Gena', value: 4}, {title:'Tamara' , value: 5}]}/>
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion titleValue='Accordion'
                      collapsed={collapsed}
                      onClick={(value) => {alert(`users with ID ${value} should be happy`)}}
                      // onClick={onClickCallback}
                      onChange={() => {setCollapsed(!collapsed)}}
                      items={[
                          {title: 'Art', value: 2},
                          {title:'Tonya',value: 3},
                          {title: 'Gena', value: 4},
                          {title:'Tamara' , value: 5}]
                      }/>
}












































