import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (user) => {
    setUsersList((prevList) => [user, ...prevList]);
    console.log("in app", user);
  };
  const users = [
    { name: "John Doe", age: 29 },
    { name: "Karl Marx", age: 50 },
  ];
  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
