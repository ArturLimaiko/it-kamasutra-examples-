import React, {useState} from "react";

export default {
    title: 'React.memo demo',
}

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: string[] }) => {
    console.log('USERS')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    console.log('Example1')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Art', 'Valera', 'Artem','Tamara'])

    const addUser = () => {
        const newUsers = [...users,'Sveta ' + new Date().getTime() ]
        setUsers(newUsers)
    }

    const onClickHandler = () => setCounter(counter + 1)

    return <>
        <button onClick={onClickHandler}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}