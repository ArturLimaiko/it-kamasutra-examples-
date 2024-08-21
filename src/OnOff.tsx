import React from 'react';

export type OnOffType = {
    switchOn: boolean
    onChange: (on: boolean) => void
}

export const OnOff = ({switchOn,onChange} : OnOffType) => {

    const onStyle = {
        display: 'block',
        borderRadius: '5px',
        padding: '10px 30px',
        margin: '0',
        border: '1px solid gray',
        backgroundColor: switchOn ? 'green' : 'white',
        color: 'black'

    }
    const offStyle = {
        display: 'block',
        borderRadius: '5px',
        padding: '10px 30px',
        margin: '0',
        border: '1px solid gray',
        backgroundColor: switchOn ? 'white' : 'red',
        color: 'black'
    }
    const switchButton = {
        display: 'block',
        padding: '15px',
        border: '1px solid gray',
        borderRadius: '30px',
        backgroundColor: switchOn ? 'green' : 'red'
    }
    const wrap = {
        display: 'flex',
        gap: '20px',
        justifyContent: 'center'
    }

    return (
        <div style={wrap}>
            <div style={onStyle} onClick={() => onChange(true)}>on</div>
            <div style={offStyle} onClick={() => onChange(false)}>off</div>
            <div style={switchButton}> {switchOn.toString() } </div>
        </div>
    );
};

//посложнее вариант

// import React, {useState} from 'react';
// import './OnOff.css';
//
// export const OnOff = () => {
//     let [isOn, setIsOn] = useState(false);
//
//     const isOnClick = () => {
//         setIsOn(true)
//     }
//
//     const isOffClick = () => {
//         setIsOn(false)
//     }
//
//     return (
//         <div className={'wrap'}>
//             <div className={`green ${isOn ? 'active' : ''}`} onClick={isOnClick}>ON</div>
//             <div className={`red ${!isOn ? 'active' : ''}`} onClick={isOffClick}>OFF</div>
//             <button onClick={() =>  alert(isOn ? 'Is On!' : 'Is Off!')}> Click me!
//             </button>
//         </div>
//     );
// };