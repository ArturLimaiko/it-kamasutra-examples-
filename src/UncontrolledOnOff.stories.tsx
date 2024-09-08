import React from "react";
import {UncontrolledOnOff} from "./UncontrolledOnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
}
const callBack = action("on or off clicked");

export const OnMode = () => {
    return <UncontrolledOnOff onChange={callBack} defaultOn={true}/>
}

export const OffMode = () => {
    return <UncontrolledOnOff onChange={callBack} defaultOn={false}/>
}















