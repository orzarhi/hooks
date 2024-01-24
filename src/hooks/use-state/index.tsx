import { useState } from "react"

type User = {
    id: number
    name: string
    age: number
}

export const Demo = () => {
    const [show, setShow] = useState<boolean>(true)
    const [text, setText] = useState<string>('')
    const [users, setUsers] = useState<User[]>([
        { id: 1, name: 'Josh', age: 32 },
        { id: 2, name: 'Piglet', age: 30 },
    ])

    const addUser = () => {
        // setUsers([...users, { name: 'Or', age: 30 }])
        if (!text) return;

        setUsers([...users, { id: users.length + 1, name: text, age: (users.length + 1) / 2 * 3 }])
        setText('')
    }

    return (
        <>
            {show &&
                <div>
                    <h1>Users</h1>
                    <ul>
                        {users.map((user) => <li key={user.id}>{user.name} - {user.age}</li>)}
                    </ul>
                </div>}
            <button onClick={addUser}>Add user</button>
            <button onClick={() => setShow(!show)}>Toggle</button>
            <input type="text" value={text} onChange={({ target }) => setText(target.value)} />
        </>
    )
}
