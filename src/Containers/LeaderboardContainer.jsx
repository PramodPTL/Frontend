import React, { useState, useEffect } from "react";
import axios from "axios";
import LeaderBoardTitle from "../Components/LeaderBoardTitle";
import Users from "../Components/Users";

const LeaderboardContainer = () => {
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState("");

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:5000/api/users");
    setUsers(res.data);
  };

  const handleClaim = async (id) => {
    const res = await axios.put(`http://localhost:5000/api/users/${id}/claim`);
    fetchUsers(); // Re-fetch to get updated + sorted list
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    if (newName.trim() === "") return;

    await axios.post("http://localhost:5000/api/users", {
      name: newName.trim(),
    });
    setNewName("");
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>⚡ Leaderboard</h2>

      <form onSubmit={handleAddUser} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={newName}
          placeholder="Enter new user name"
          onChange={(e) => setNewName(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>

      <table className="table table-striped table-hover table-bordered">
        <LeaderBoardTitle />
        <Users users={users} onClaim={handleClaim} />
      </table>
    </div>
  );
};

export default LeaderboardContainer;
