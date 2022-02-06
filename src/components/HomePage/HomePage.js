import React, { useState } from "react";
import classes from "./HomePage.module.css";
import { Container, CssBaseline, Box } from "@mui/material";
import logoUrl from "../../assets/images/Patternz.png";
import LoginForm from "../Forms/LoginForm/LoginForm";
import SignUpForm from "../Forms/SignUpForm/SignUpForm";

const HomePage = () => {
  const [isLogin, setloginState] = useState(true);
  const [isSignUp, setSignUpState] = useState(false);

  const pageToggleHandler = (props) => {
    setSignUpState(props.signUp);
    setloginState(props.login);
  };

  const boxStyle = {
    bgcolor: "#031322",
    height: "90vh",
    borderRadius: "1rem",
    marginTop: "2rem",
    marginBottom: "2rem",
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={boxStyle}>
          <div className={classes["image-box"]}>
            <img className={classes.log} alt="logo" src={logoUrl}></img>
          </div>
          <div className={classes["form-box"]}>
            {isLogin && <LoginForm toggleForms={pageToggleHandler} />}
            {isSignUp && <SignUpForm toggleForms={pageToggleHandler} />}
          </div>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
