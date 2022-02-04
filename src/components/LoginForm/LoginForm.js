import classes from "./LoginForm.module.css";
import { TextField, Button, Link } from "@mui/material";

const LoginForm = (props) => {
  return (
    <form className={classes["login-form"]}>
      <TextField
        type="text"
        className={classes["login-text-field"]}
        id="outlined-basic"
        label="Username"
        variant="outlined"
      />
      <TextField
        type="password"
        className={classes["login-text-field"]}
        id="outlined-basic"
        label="Password"
        variant="outlined"
      />
      <Button variant="contained" color="success">
        Login
      </Button>
      <span className={classes.link}>
        Not registered yet? <Link> Sign Up Now</Link>
      </span>
    </form>
  );
};

export default LoginForm;
