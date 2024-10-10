import React, {useState} from "react";

export default {
    title: 'useState demo',
}

//какая то функция которая делает сложные вычисления и возвращает нам его
function generateData() {
    //тяжелый подсчет
    console.log('generateData')
    return 231241423121
}

export const Example1 = () => {
    console.log('Example1')

    // можем передать функцию которая что то вызовет - useState может вызвать функцию ( useState не умеет сохранять)
    // если передаем в качестве инициализационного значения функцию то реакт воспринимает как функцию которую надо вызвать
    //и которая вернут инициализационное значение
    const [counter, setCounter] = useState(generateData)// [0 , function(newValue){}]

    // функция изменитель с четкими правилами( фиксированные правила )
    const changer = (state: number) => state + 1

    //вообще - в setCounter можем передавать не конкретное значение как у нас counter + 1 , а можно передавать
    // Функцию - подобие reduce функции
    return <>
        {/* в setCounter отдаем функцию изменитель - он ее вызовет и передаст тот стейт который есть на данный момент - 1 а потом вернет новое значение и в стейт придет новое значение - 2 */}
        <button onClick={() => setCounter(changer)}>counter+</button>
        {counter}
    </>
}













