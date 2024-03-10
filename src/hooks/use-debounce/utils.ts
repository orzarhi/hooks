import { faker } from '@faker-js/faker';

export const users = Array.from({ length: 10 }, (_, i) => ({ id: i, name: faker.person.fullName(), }));

export const fetchUsers = async (query: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return users.filter((user) => user.name.toLowerCase().includes(query.toLowerCase()));
}