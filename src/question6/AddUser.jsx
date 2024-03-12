import React, { useState } from "react";
import { connect } from "react-redux";
import { usersSlice } from "./usersSlice";

const AddUser = ({ user, addUser }) => {
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(userName);
    setUserName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

const mapProps = (state) => ({
  users: state.users,
});

const mapAddProps = {
  AddUser,
};

export default connect(mapProps, mapAddProps);
