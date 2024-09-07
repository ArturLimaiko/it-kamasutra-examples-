// import type {Meta, StoryObj} from '@storybook/react';

import {action} from '@storybook/addon-actions';

import {Accordion} from "./Accordion";
import React, {useState} from "react";

export default {
    component: Accordion,
}

//Димыч сказал пока что не пользуемся
// export const FirstStory: StoryObj<typeof Accordion> = {
//     args: {
//         titleValue: "First Story",
//         collapsed: true,
//         onChange: () => {
//             console.log('on change')
//         },
//     }
// }

const onChangeHandler = () => action('onChange')

export const CollapsedAccordion = () => {
    return <Accordion titleValue='Accordion collapsed'
                      collapsed={true}
                      onChange={onChangeHandler}/>
}

export const openedAccordion = () => {
    return <Accordion titleValue='Accordion opened'
                      collapsed={false}
                      onChange={() => {
                      }}/>
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion titleValue='Accordion'
                      collapsed={collapsed}
                      onChange={() => {
                          setCollapsed(!collapsed)
                      }}/>
}