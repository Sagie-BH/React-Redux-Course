import React from "react";
import User from "./User";

const UserGrid = ({ users }) => {
  return (
    <div className="container">
      {users.map((user) => (
        <User
          user={user}
          key={user.id.value + Math.floor(Math.random * 100000)}
        />
      ))}
    </div>
  );
};

export default UserGrid;
