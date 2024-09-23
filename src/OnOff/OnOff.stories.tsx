import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {OnOff} from "./OnOff";

export default {
    title: "OnOff stories",
    component: OnOff,
}

const callBack = action('on or off clicked');

export const OnMode = () => <OnOff switchOn={true} onChange={callBack}/>;

export const OffMode = () => <OnOff switchOn={false} onChange={callBack}/>;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <OnOff switchOn={value} onChange={setValue}/>
};