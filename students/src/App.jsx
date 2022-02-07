import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserGrid from './users/UserGrid';
import './bootstrapSolar.min.css';
import DropDown from './DropDown';

const App = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const result = await axios('https://randomuser.me/api/?results=12');
      const resultUsers = await result.data.results;
      setUsers(resultUsers);
    }
    fetchUsers();
  },[]);

  return (
    <div className="App">
      <DropDown/>
      <UserGrid users={users} />
    </div>
  );
}

export default App;
