import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Login = ({setEmail, setPassword, handleLogin}) => {
  return (
    <div>
      this is log in
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 2, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="email" variant="outlined" onChange={(e) => setEmail(e.target.value)}/>
        <br />
        <TextField id="outlined-basic" label="password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
       
      </Box>
      <Button variant="contained" onClick={handleLogin}>sign in</Button>
      <p>or <span>dont have an account? <Link to={'/signup'}>Create account</Link></span></p>

    </div>
  );
};

export default Login;
