// import React from 'react';
// import './OnOff.css';
//
// export const OnOff = () => {
//  let [isOn,setIsOn] = useState(false);
//
//     const isGreenClick = () => {
//
//     }
//
//     const isGreenClick = () => {
//
//     }
//
//
//     return (
//         <div className={'wrap'}>
//             <div >green</div>
//             <div>red</div>
//             <button onClick={()=> {}}> Click me! </button>
//         </div>
//     );
// };

import React, { useState } from 'react';
import './OnOff.css';

export const OnOff = () => {
    const [isOn, setIsOn] = useState(false); // false means red, true means green

    const onGreenClick = () => {
        setIsOn(true);
    }

    const onRedClick = () => {
        setIsOn(false);
    }

    return (
        <div className='wrap'>
            <div className={`green ${isOn ? 'active' : ''}`} onClick={onGreenClick}>green</div>
            <div className={`red ${!isOn ? 'active' : ''}`} onClick={onRedClick}>red</div>
            <button onClick={() => alert(isOn ? 'Green is ON' : 'Red is ON')}>
                Click me!
            </button>
        </div>
    );
};

