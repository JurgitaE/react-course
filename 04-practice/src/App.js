import React, { useState } from 'react';
import AddUsers from './components/Users/AddUser';
import UsersLists from './components/Users/UsersList';


function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prev) => {
      return [...prev, { name: uName, age: uAge, id: Math.random().toString() }];
    });
  };


  return (
    <div>
      <AddUsers onAddUser={addUserHandler} />
      <UsersLists users={usersList} />
    </div>
  );
}

export default App;
