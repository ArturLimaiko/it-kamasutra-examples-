import React, {useRef, useState} from "react";

export default {
    title: 'Uncontrolled Input',
    // component:
}

export const UncontrolledInputDemo = () => <input/>

export const UncontrolledInputWithTrackValue = () => {
    const [value, setValue] = useState("");
    return (
        <>
            <input onChange={(event) => {
                const actualValue = event.currentTarget.value
                setValue(actualValue)
            }}/> -
            {value}
        </>
    )
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value);
    }

    return (
        <>
            <input ref={inputRef}/>
            <button onClick={save}> save</button>
            - actual value: {value}
        </>
    )
}

export const ControlledInputWithFixedValue = () => <input value={'type here...'}/>
















