import React, {useState} from 'react';
import './OnOff.css';

export const OnOff = () => {
    let [isOn, setIsOn] = useState(false);

    const isOnClick = () => {
        setIsOn(true)
    }

    const isOffClick = () => {
        setIsOn(false)
    }

    return (
        <div className={'wrap'}>
            <div className={`green ${isOn ? 'active' : ''}`} onClick={isOnClick}>ON</div>
            <div className={`red ${!isOn ? 'active' : ''}`} onClick={isOffClick}>OFF</div>
            <button onClick={() =>  alert(isOn ? 'Is On!' : 'Is Off!')}> Click me!
            </button>
        </div>
    );
};