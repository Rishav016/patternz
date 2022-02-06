import React, { useState } from "react";
import { Button } from "@mui/material";
import { TextField, Link } from "@mui/material";
import classes from "./SignUpForm.module.css";

const SignUpForm = (props) => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitSignUpHandler = (event) => {
    event.preventDefault();
  };

  const usernameChangeHandler = (e) => {
    setUserName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const toggleForms = () => {
    props.toggleForms({ login: true, signUp: false });
  };

  return (
    <form className={classes["form-control"]} onSubmit={submitSignUpHandler}>
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
        id="email"
        className={classes["text-field"]}
        label="Mobile number or email address"
        type="text"
        InputLabelProps={{
          shrink: true,
        }}
        value={email}
        onChange={emailChangeHandler}
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
        Sign Up
      </Button>
      <span className={classes["link"]}>
        Already Registered <Link onClick={toggleForms}> Please Login</Link>
      </span>
    </form>
  );
};

export default SignUpForm;
