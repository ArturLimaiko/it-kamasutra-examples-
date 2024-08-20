import React, {useState} from "react";


export function UncontrolledRating() {
    const [value, setValue] = useState(0)

    return (
        <div>
            <Star selected={value > 0} setValue={setValue} value={1}/>
            <Star selected={value > 1} setValue={setValue} value={2}/>
            <Star selected={value > 2} setValue={setValue} value={3}/>
            <Star selected={value > 3} setValue={setValue} value={4}/>
            <Star selected={value > 4} setValue={setValue} value={5}/>
        </div>
    );
}

type StarType = {
    selected: boolean
    value: 1 | 2 | 3 | 4 | 5
    setValue: (value: 1 | 2 | 3 | 4 | 5) => void
}

export function Star({selected, setValue, value}: StarType) {
    return <span style={{cursor: "pointer", display: 'flex', justifyContent: 'center'}}
                 onClick={() => setValue(value)}> {selected ? <b> Star </b> : 'star'}</span>
}
