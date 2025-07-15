import React from "react";
import User from "./User";

const Users = ({ users, onClaim }) => (
  <tbody>
    {users.map((user, index) => (
      <User
        key={user.id}
        user={{ ...user, ranking: index + 1 }}
        onClaim={onClaim}
      />
    ))}
  </tbody>
);

export default Users;
