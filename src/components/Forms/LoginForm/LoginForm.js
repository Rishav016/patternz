import React from "react";
import classes from "./LoginForm.module.css";
import { TextField, Button, Link } from "@mui/material";
import { useState } from "react";

const LoginForm = (props) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const submitLoginHandler = (e) => {
    e.preventDefault();
  };

  const usernameChangeHandler = (e) => {
    setUserName(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const toggleForms = () => {
    props.toggleForms({ login: false, signUp: true });
  };

  return (
    <form className={classes["form-control"]} onSubmit={submitLoginHandler}>
      <TextField
        id="username"
        className={classes["text-field"]}
        label="Username"
        type="text"
        InputLabelProps={{
          shrink: true,
        }}
        value={username}
        onChange={usernameChangeHandler}
      />
      <TextField
        id="password"
        className={classes["text-field"]}
        label="Password"
        type="password"
        InputLabelProps={{
          shrink: true,
        }}
        value={password}
        onChange={passwordChangeHandler}
      />
      <Button type="submit" variant="contained" color="success">
        Login
      </Button>
      <span className={classes["link"]}>
        Not registered yet?
        <Link onClick={toggleForms}>SignUp Now</Link>
      </span>
    </form>
  );
};

export default LoginForm;
