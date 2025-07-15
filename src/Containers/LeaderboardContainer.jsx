import React, { useState } from "react";
import LeaderBoardTitle from "../Components/LeaderBoardTitle";
import Users from "../Components/Users";


const initialUsers = Array.from({ length: 0 }, (_, i) => ({
  id: i,
  name: `User ${i + 1}`,
  points: 0,
}));

const LeaderboardContainer = () => {
  const [users, setUsers] = useState(initialUsers);
  const [newName, setNewName] = useState("");

  const handleClaim = (id) => {
    const randomPoints = Math.floor(Math.random() * 10) + 1;
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, points: user.points + randomPoints } : user
    );
    const sortedUsers = [...updatedUsers].sort((a, b) => b.points - a.points);
    setUsers(sortedUsers);
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    if (newName.trim() === "") return;

    const newUser = {
      id: users.length,
      name: newName.trim(),
      points: 0,
    };

    const updatedUsers = [...users, newUser].sort(
      (a, b) => b.points - a.points
    );
    setUsers(updatedUsers);
    setNewName("");
  };

  return (
    <>
      
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

        <table border="1" cellPadding="10" cellSpacing="0">
          <LeaderBoardTitle />
          <Users users={users} onClaim={handleClaim} />
        </table>
      </div>
    </>
  );
};

export default LeaderboardContainer;
