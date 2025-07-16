import React, { useEffect, useState } from "react";
import axios from "axios";

const UserHistory = ({ userId }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const res = await axios.get(
        `http://localhost:5000/api/users/${userId}/history`
      );
      setHistory(res.data);
    };

    if (userId) fetchHistory();
  }, [userId]);

  return (
    <div>
      <h4>Claim History</h4>
      <ul>
        {history.map((h) => (
          <li key={h._id}>
            +{h.claimedPoints} points at{" "}
            {new Date(h.timestamp).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserHistory;
