import React, {useEffect, useState} from 'react';
import s from './clock.module.css'

export const ClockApp = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {

        const intervalId = setInterval(() => {
            setTime(new Date());
            // Очистка интервала при размонтировании компонента
            return () => clearInterval(intervalId);
        }, 1000)

    }, [])// Пустой массив зависимостей, чтобы эффект запускался только при монтировании

    return (
        <div className={s.clock}>
            <h2 className={s.clock_head}>clock</h2>
            <div className={s.clock_wrap}>
                <div><h3 className={s.clock_hours}> hours:
                    <span className={s.hours}>{time.getHours()}</span></h3>
                </div>
                <div><h3 className={s.clock_minutes}> minutes:
                    <span className={s.minutes}> {time.getMinutes()} </span></h3>
                </div>
                <div><h3 className={s.clock_seconds}> seconds:
                    <span className={s.seconds}> {time.getSeconds()}</span></h3>
                </div>
            </div>
        </div>
    );
};