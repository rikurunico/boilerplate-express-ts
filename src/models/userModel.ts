export interface User {
  id: number;
  username: string;
  email: string;
  name: string;
  password: string;
}

const users: User[] = [
  {
    id: 1,
    username: "john_doe",
    email: "john_doe@gmail.com",
    name: "John Doe",
    password: "password",
  },
  {
    id: 2,
    username: "jane_doe",
    email: "jane_doe@gmail.com",
    name: "Jane Doe",
    password: "password",
  },
];

export const getUsers = (): User[] => {
  return users;
};

export const getUser = (id: number): User | undefined => {
  return users.find((user) => user.id === id);
};

export const createUser = (user: User): User => {
  users.push(user);
  return user;
};

export const updateUser = (id: number, user: User): User | undefined => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    users[index] = user;
    return user;
  }
  return undefined;
};

export const deleteUser = (id: number): User | undefined => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
  return undefined;
};
