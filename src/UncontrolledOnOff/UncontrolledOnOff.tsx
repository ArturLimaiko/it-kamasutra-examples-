import React, {useState} from 'react';

export type UncontrolledOnOffType = {
    onChange: (on: boolean) => void;
    defaultOn? : boolean;
}

export const UncontrolledOnOff = ({onChange,defaultOn}: UncontrolledOnOffType) => {
    const [onOff, setOnOff] = useState<boolean>(defaultOn? defaultOn : false);

    const onStyle = {
        display: 'block',
        borderRadius: '5px',
        padding: '10px 30px',
        margin: '0',
        border: '1px solid gray',
        backgroundColor: onOff ? 'green' : 'white',
        color: 'black'

    }
    const offStyle = {
        display: 'block',
        borderRadius: '5px',
        padding: '10px 30px',
        margin: '0',
        border: '1px solid gray',
        backgroundColor: onOff ? 'white' : 'red',
        color: 'black'
    }
    const switchButton = {
        display: 'block',
        padding: '15px',
        border: '1px solid gray',
        borderRadius: '30px',
        backgroundColor: onOff ? 'green' : 'red'
    }
    const wrap = {
        display: 'flex',
        gap: '20px',
        justifyContent: 'center'
    }

    const OnClicked = () => {
        setOnOff(true)
        onChange(true)
    }

    const OffClicked = () => {
        setOnOff(false)
        onChange(false)
    }

    return (
        <div style={wrap}>
            <div style={onStyle} onClick={OnClicked}>on</div>
            <div style={offStyle} onClick={OffClicked}>off</div>
            <div style={switchButton}></div>
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