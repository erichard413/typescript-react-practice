import { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import React from "react";
import ChildContext from "./ChildContext";

type User = {
  id: string;
  name: string;
  age: number;
};

type ContextType = {
  users: User[];
  addUser: ({ name, age }: { name: string; age: number }) => void;
};

const Context = createContext<ContextType | null>(null);
// write custom hook to call "useContext" to handle if context is NULL
export function useUsers() {
  const usersContext = useContext(Context);
  if (usersContext == null) {
    throw new Error("Must use within provider");
  }
  return usersContext;
}

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  function addUser({ name, age }: { name: string; age: number }) {
    setUsers(prevUsers => [
      ...prevUsers,
      { id: crypto.randomUUID(), name, age },
    ]);
  }

  return (
    <Context.Provider value={{ users, addUser }}>
      <ChildContext />
    </Context.Provider>
  );
}

function getUsers() {
  return Promise.resolve([
    { id: crypto.randomUUID(), name: "Kyle", age: 28 },
    { id: crypto.randomUUID(), name: "Erik", age: 36 },
  ]);
}
