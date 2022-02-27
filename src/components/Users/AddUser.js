import { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import styles from "./AddUser.module.css";

function AddUser(props) {
  //   const [username, setUsername] = useState("");
  //   const [age, setAge] = useState("");
  const [error, setError] = useState();
  const nameInputRef = useRef();
  const ageInputref = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputref.current.value;

    if (enteredUsername.trim().length === 0 && enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name & age.No empty values",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age>0",
      });
      return;
    }
    props.onAddUser({
      username: enteredUsername,
      age: enteredAge,
      id: Math.random().toString(),
    });

    nameInputRef.current.value = "";
    ageInputref.current.value = "";
  };

  const errorDialogHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
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
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputref} />
          <Button type="submit">Add User</Button>
          {/* <button type="submit">Add User</button> */}
        </form>
      </Card>
    </Wrapper>
  );
}

export default AddUser;
