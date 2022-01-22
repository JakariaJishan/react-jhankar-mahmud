import { Box, Button, TextField } from "@mui/material";
import React from "react";

const Form = ({title, setUser, setPassword, handleAction}) => {
  return (
    <div>
      <div className="heading-container">
        <h3>{title} Form</h3>
      </div>

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="email" label="Enter the Email" variant="outlined" onChange={(e) => setUser(e.target.value)}/>
        <TextField
          id="password"
          label="Enter the Password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
      <Button variant="contained" onClick={handleAction}>{title}</Button>
    </div>
  );
};

export default Form;
// private-route-with-firebasAuth