import React from "react";
import classes from "./Home.module.css";
import { Container, CssBaseline, Box, Link } from "@mui/material";
import logoUrl from "../../assets/images/Patternz.png";
import footerImage from "../../assets/images/footer.png";
import LoginForm from "../LoginForm/LoginForm";

const Login = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          sx={{
            bgcolor: "#031322",
            height: "90vh",
            borderRadius: "1rem",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          <div className={classes["image-box"]}>
            <img className={classes.log} alt="logo" src={logoUrl}></img>
          </div>
          <div className={classes["form-box"]}>
            <LoginForm />
          </div>
          
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Login;
