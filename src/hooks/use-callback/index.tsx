import { useCallback, useState } from 'react';

import { shuffle } from './utils';

import Search from './Search';

const allUsers = [
    'john',
    'alex',
    'george',
    'simon',
    'james',
];


export const Demo = () => {
    const [users, setUsers] = useState(allUsers);

    const handleSearch = useCallback((text: string) => {
        const filteredUsers = allUsers.filter((user) =>
            user.includes(text),
        );
        setUsers(filteredUsers);
    }, []);

    return (
        <>
            <div className='align-center mb-2 flex'>
                <button onClick={() => setUsers(shuffle(allUsers))}>
                    Shuffle
                </button>

                <Search onChange={handleSearch} />
            </div>
            <ul >
                {users.map((user) => (
                    <li key={user} className='list-none'>{user}</li>
                ))}
            </ul>
        </>
    );
}