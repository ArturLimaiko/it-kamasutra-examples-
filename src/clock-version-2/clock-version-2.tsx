import React, {useEffect, useState} from 'react';

type PropsType = {}

const get2digitsString = (num: number) => num < 10 ? `0` + num : num

export const ClockVersion2: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    //ассинхронная движуха ( сайд эффект) внутрь передаем сайдэффектовую логику
    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return (() => clearInterval(intervalId))// Очистка интервала при размонтировании компонента
    }, []) // что бы отработал какой то эффект 1 раз то передадим пустой массив

    return (
        <div>
            <span>{get2digitsString(date.getHours())}</span>:
            <span>{get2digitsString(date.getMinutes())}</span>:
            <span>{get2digitsString(date.getSeconds())}</span>
        </div>
    )
}