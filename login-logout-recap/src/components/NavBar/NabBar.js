import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NabBar = ({handleLogOut}) => {
  let accessToken = sessionStorage.getItem("access token");
  return (
    <div>
      {" "}
      <Link to={"/"}>Home</Link>
      <Link to={"/subscribe"}>Subscribe</Link>
      <Link to={"/about"}>About</Link>
      {accessToken ? <Button variant="contained" onClick={handleLogOut}>Log out</Button> : <Link to={"/login"}>Login</Link>}
    </div>
  );
};

export default NabBar;
