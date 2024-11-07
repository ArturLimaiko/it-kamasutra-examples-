import React, {useEffect, useState} from 'react';
import { AnalogClockView } from './AnalogClockView';
import {DigitalClockView} from "./DigitalClockView";

type PropsType = { mode?: 'digital' | 'analog' }
export type ClockViewPropsType = { date: Date }

export const ClockVersion2: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    //ассинхронная движуха ( сайд эффект) внутрь передаем сайдэффектовую логику
    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return (() => clearInterval(intervalId))// Очистка интервала при размонтировании компонента
    }, []) // что бы отработал какой то эффект 1 раз то передадим пустой массив

    let view;

    switch (props.mode) {
        case 'analog':
            view = <AnalogClockView date={date} />
            break;
        case 'digital':
        default:
            view = <DigitalClockView date={date} />
    }
    return (
        <div>
            {view}
        </div>
    )
}