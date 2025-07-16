import React, { useState } from "react";
import UserHistory from "./UserHistory";

const User = ({ user, onClaim }) => {
  const [showHistory, setShowHistory] = useState(false);

  return (
    <>
      <tr>
        <td>{user.ranking}</td>
        <td>{user.name}</td>
        <td>{user.points}</td>
        <td>
          <button
            className="btn btn-sm btn-success me-2"
            onClick={() => onClaim(user._id)}
          >
            Claim
          </button>
          <button
            className="btn btn-sm btn-info"
            onClick={() => setShowHistory(!showHistory)}
          >
            {showHistory ? "Hide" : "Show"} History
          </button>
        </td>
      </tr>
      {showHistory && (
        <tr>
          <td colSpan="4">
            <UserHistory userId={user._id} />
          </td>
        </tr>
      )}
    </>
  );
};

export default User;
