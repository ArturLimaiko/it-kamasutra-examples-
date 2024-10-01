import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'UseMemo',
}

export const DifficultCounting = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a]);


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>Result for a: {resultA}</div>
        <div>Result for b: {resultB}</div>
    </>
}


const UsersSecret = (props: { users: string[] }) => {
    console.log('USERS SECRET')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpsForReactMemo = () => {
    console.log('HelpsForReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Art', 'Valera', 'Artem', 'Tamara'])

    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf('a') > -1)
        return newArray
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Sveta ' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUser()}>add User</button>
        {counter}
        <Users users={newArray}/>
    </>
}

//Hook UseCallback======================================================================================================


export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['Ract', 'JS', 'TS', 'HTML'])

    // const memoizedAddBook = useMemo(() => {
    //     //тот самый useCallback
    //     // не будет вызываться до тех пор пока books не поменяется
    //     return () => {
    //         const newUsers = [...books, 'Angular ' + new Date().getTime()]
    //         setBooks(newUsers)
    //     }
    // }, [books])

    const memoizedAddBook2 = useCallback(() => {
        //тот самый useCallback
        // не будет вызываться до тех пор пока books не поменяется
        const newUsers = [...books, 'Angular ' + new Date().getTime()]
        setBooks(newUsers)
    }, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>

        {counter}
        <Book addBook={memoizedAddBook2}/>
    </>
}

type BookSecretType = {
    addBook: () => void
}

const BooksSecret = ({addBook}: BookSecretType) => {
    console.log('BooksSecret')
    return <div>
        <button onClick={() => addBook()}>add book</button>
    </div>
}
const Book = React.memo(BooksSecret)
