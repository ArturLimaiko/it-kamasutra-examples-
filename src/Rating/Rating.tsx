import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

export type RatingType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

export function Rating({value, onClick}: RatingType) {
    return (
        <div>
            <Star selected={value > 0} onClick={onClick} value={1}/>
            <Star selected={value > 1} onClick={onClick} value={2}/>
            <Star selected={value > 2} onClick={onClick} value={3}/>
            <Star selected={value > 3} onClick={onClick} value={4}/>
            <Star selected={value > 4} onClick={onClick} value={5}/>
        </div>
    );
}

type StarType = {
    selected: boolean
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

export function Star({selected, onClick, value}: StarType) {
    return <span onClick={ () => { onClick(value) } }> {selected ? <b> Star </b> : 'star'}</span>
}
