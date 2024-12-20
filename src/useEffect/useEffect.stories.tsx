import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo',
}

export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log("SimpleExample");

    //вызывается каждый рендер так как не передали в зависимости ничего
    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })

    //передали в зависимость пустой массив по этому только при первом рендере отрисуется
    useEffect(() => {
        console.log('useEffect only first render( component Didmount)')
        document.title = counter.toString()
    }, [])

    //
    useEffect(() => {
        console.log('useEffect first render and every counter render')
        document.title = counter.toString()
    }, [counter])

    return <>
        Hello, {counter} , {fake}
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>
}

export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log("SetTimeoutExample");

    //все ассинхронные операции должны делать внутри useEffect()
    useEffect(() => {

        //когда меняется counter говорим перезапускай этот эффект (setTimeout) через секунду поменяется
        setTimeout(() => {
            console.log("setTimeout");
            document.title = counter.toString()
        }, 1000)

    }, [counter]);

    return <>
        Hello, {counter} , {fake}
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>
}

export const SetIntervalExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log("SetIntervalExample");

    useEffect(() => {
        //*
        setInterval(() => {
            console.log(" Tik: " + counter);
            setCounter(state => state + 1)
        }, 1000)

    }, []);

    return <>
        Hello, counter: {counter} - fake: {fake}
    </>
}

//*
//тут вообще функция даже не вызывается целиком , setInterval запустился единожды
// а setCounter берет из замыкания тот  counter который был в самый 1 раз - а там была 1
//и он работает с 1 вызовом функции SetIntervalExample(), в counter сидит 1
// и при каждом ТИКЕ берет 1 , а 1 + 1 =2 и отправляет в  state , далее в counter типа 2 он отрисовывает единожды
// и useEffect больше не регистрируется тк зависимостей нет, но в counter была единичка и он забирает ее и сетает 2
// соответственно и перерисовка не происходит и setInterval берет значение из замыкания , а ему нужно свежее значение -
// а мы можем передать преобразователь которая говорит не конкретное значение на тебе а КАК преобразовать его!
//таким образом мы увидим  изменения


export const ResetEffectExample = () => { // эта компонента будет вызываться при каждом изменении counter
    const [counter, setCounter] = useState(1)

    console.log("component rendered with " + counter);

    useEffect(() => {
        console.log('Effect occurred ' + counter)
        //сбрасываем эффект
        return () => {
            console.log('reset effect ' + counter)
        }
    }, [counter]);

    const increase = () => setCounter(counter + 1) // ф-ция будет создаваться при каждом изменений counter

    return <>
        Hello, counter: {counter}
        <button onClick={increase}>click</button>
    </>
}


export const KeysTrackerExample = () => { // эта компонента будет вызываться при каждом изменении counter
    const [text, setText] = useState('')

    console.log("component rendered with " + text);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text => e.key)
        }

        window.addEventListener("keypress", handler)

        return () => {
            window.removeEventListener('keypress', (handler))
        }
    }, [text]);

    return <>
        Typed text: {text}
    </>
}


export const SetIntervalExample1 = () => { // эта компонента будет вызываться при каждом изменении counter
    const [text, setText] = useState('')

    console.log("component rendered with " + text);

    useEffect(() => {
        const intervalId = setTimeout(() => {
            console.log('TIMEOUT')
            setText('3 seconds passed')
        }, 3000)

        return () => {
            console.log('component unmount')
            clearInterval(intervalId);
        }

    }, [text])

    return <>
        Typed text: {text}
    </>
}


