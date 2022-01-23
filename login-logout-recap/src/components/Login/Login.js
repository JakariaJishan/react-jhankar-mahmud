import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      this is log in
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="email" variant="outlined" />
        <br />
        <TextField id="outlined-basic" label="password" variant="outlined" />
       
      </Box>
      <Button variant="contained">sign in</Button>
      <p>or <span>dont have an account? <Link to={'/signup'}>Create account</Link></span></p>

    </div>
  );
};

export default Login;
