import React from "react";
import {UncontrolledRating} from "./UncontrolledRating";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Uncontrolled Rating',
    component: UncontrolledRating,
}
const callBack = action('Rating changed inside component')

export const UncontrolledRatingDemo = () => <UncontrolledRating  defaultValue={0} onChange={callBack}/>
















