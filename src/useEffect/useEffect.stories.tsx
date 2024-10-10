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
    },[])

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













