import React, {ChangeEvent, useRef, useState} from "react";

export default {
    title: 'Uncontrolled Input',
}

export const UncontrolledInputDemo = () => <input/>

export const UncontrolledInputWithTrackValue = () => {
    const [value, setValue] = useState("");

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }

    return (
        <>
            <input onChange={onChange}/> -
            {value}
        </>
    )
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("");
    //c помощью хука useRef мы создаем ссылку и должны привязать ее к input
    const inputRef = useRef<HTMLInputElement>(null);
    //в колбеке берем значение на что ссылается эта ссылка и берем значение для того что бы что то с ним сделать
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
















