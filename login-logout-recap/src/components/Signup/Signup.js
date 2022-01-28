import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Signup = ({setEmail, setPassword, handleSignUp, setUser}) => {
  return (
    <div>
      this is signup page
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="user name" variant="outlined" onChange={(e) => setUser(e.target.value)}/>
        <br />
        <TextField id="outlined-basic" label="email" variant="outlined" onChange={(e) => setEmail(e.target.value)}/>
        <br />
        <TextField id="outlined-basic" label="password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
      </Box>
      <Button variant="contained" onClick={handleSignUp}>Create account</Button>
      <p>
        or{" "}
        <span>
          Already have an account? <Link to={"/login"}>Log in</Link>
        </span>
      </p>
    </div>
  );
};

export default Signup;
