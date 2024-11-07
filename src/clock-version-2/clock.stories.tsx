import React from "react";
import {ClockVersion2} from "./clock-version-2";

export default {
    title: "ClockVersion2",
    component: ClockVersion2,
}

export const ClockExampleAnalog = () => {
    return (
        <ClockVersion2 mode={'analog'}/>
    )
}

export const ClockExampleDigital = () => {
    return (
        <ClockVersion2 mode={'digital'}/>
    )
}