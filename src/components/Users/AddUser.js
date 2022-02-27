import { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

function AddUser(props) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 && age.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name & age.No empty values",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age>0",
      });
      return;
    }
    props.onAddUser({ username, age, id: Math.random().toString() });
    setAge("");
    setUsername("");
  };

  const errorDialogHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          onDialogClose={errorDialogHandler}
          title={error.title}
          message={error.message}
        />
      )}

      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            value={username}
            id="username"
            type="text"
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            value={age}
            id="age"
            type="number"
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
          {/* <button type="submit">Add User</button> */}
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
