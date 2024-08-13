import React from "react";

export type RatingType = {
    value: number
}

export function Rating({value}: RatingType) {
    return (
        <div>
            <Star selected={value > 0}/>
            <Star selected={value > 1}/>
            <Star selected={value > 2}/>
            <Star selected={value > 3}/>
            <Star selected={value > 4}/>
        </div>
    );
}

type StarType = {
    selected: boolean
}

export function Star({selected}: StarType) {
    return selected ? <span><b> Star </b></span> : <span> Star </span>
}
