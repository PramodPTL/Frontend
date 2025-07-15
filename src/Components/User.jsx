import React from "react";

const User = ({ user, onClaim }) => (
  <tr>
    <td>{user.ranking}</td>
    <td>{user.name}</td>
    <td>{user.points}</td>
    <td>
      <button onClick={() => onClaim(user.id)}>Claim</button>
    </td>
  </tr>
);

export default User;
