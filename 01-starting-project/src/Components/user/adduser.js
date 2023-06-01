import React from "react";
import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./Adduser.module.css";
import ErrorModel from "../UI/ErrorModel";

const adduser = (props) => {
  const [enteruserName, setEnterUserName] = useState("");
  const [enterAge, setEnterAge] = useState("");
  const [errorModal, setErrorModal] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteruserName.trim().length === 0 || enterAge === 0) {
      setErrorModal({
        title: "An Error Occured",
        message: "Please put valid name or age",
      });
      return;
    }
    if (+enterAge < 1) {
      setErrorModal({
        title: "An Error Occured",
        message: " Age must be greater than 1 ",
      });
      return;
    }
    // console.log(enteruserName, enterAge);
    props.onAddUser(enteruserName, enterAge);
    setEnterUserName("");
    setEnterAge("");
  };
  const usernameChangeHandler = (event) => {
    setEnterUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnterAge(event.target.value);
  };

  const errorHandler = () => {
    setErrorModal(null);
  };

  return (
    <div>
      {errorModal && (
        <ErrorModel
          title={errorModal.title}
          message={errorModal.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={enteruserName}
          ></input>
          <label htmlFor="age">Age(years)</label>
          <input
            id="username"
            type="number"
            value={enterAge}
            onChange={ageChangeHandler}
          ></input>
          <Button type="submit">Adduser</Button>
        </form>
      </Card>
    </div>
  );
};

export default adduser;
