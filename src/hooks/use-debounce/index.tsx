import { useEffect, useState } from "react";
import { fetchUsers } from "./utils";
import SearchBar from "./SearchBar";
import { useDebounce } from "./hooks";

type User = {
    id: number;
    name: string;
}
export const Demo = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [search, setSearch] = useState<string>('');
    const debouncedSearch = useDebounce(search);
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const loadUsers = async () => {
            setLoading(true);

            const users = await fetchUsers(debouncedSearch);
            setUsers(users);

            setLoading(false);
        };
        loadUsers();
    }, [debouncedSearch]);

    return (
        <div className='tutorial'>
            <SearchBar onChange={setSearch} />
            {loading && <div>Loading...</div>}
            {!loading &&
                users.map((user) => {
                    return <div key={user.id}>{user.name}</div>;
                })}
        </div>
    );
}
