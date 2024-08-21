import React, {useState} from 'react';

export const OnOff = () => {
    const [on, setOn] = useState(false);

    const onStyle = {
        display: 'block',
        borderRadius: '5px',
        padding: '10px 30px',
        margin: '0',
        border: '1px solid gray',
        backgroundColor: on ? 'green' : 'white',
        color: 'black'

    }
    const offStyle = {
        display: 'block',
        borderRadius: '5px',
        padding: '10px 30px',
        margin: '0',
        border: '1px solid gray',
        backgroundColor: on ? 'white' : 'red',
        color: 'black'
    }
    const switchButton = {
        display: 'block',
        padding: '15px',
        border: '1px solid gray',
        borderRadius: '30px',
        backgroundColor: on ? 'green' : 'red'
    }
    const wrap = {
        display: 'flex',
        gap: '20px',
        justifyContent: 'center'
    }

    return (
        <div style={wrap}>
            <div style={onStyle} onClick={() => setOn(true)}>on</div>
            <div style={offStyle} onClick={() => setOn(false)}>off</div>
            <div style={switchButton}>{setOn.toString()}</div>
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