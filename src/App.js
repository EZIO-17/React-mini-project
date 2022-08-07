import logo from './logo.svg';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UserList';
import { useState } from 'react';

function App() {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge, uEmail) => {
    setUsersList((prevUsersList) => {
      return[...prevUsersList, {name: uName, age: uAge, email: uEmail}];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
