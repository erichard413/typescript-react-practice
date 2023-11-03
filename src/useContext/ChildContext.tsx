import React from "react";
import { useUsers } from "./App-useContext";

export default function ChildContext() {
  const { users } = useUsers();
  return (
    <ul>
      {users.map(user => {
        return <li>{user.name}</li>;
      })}
    </ul>
  );
}
