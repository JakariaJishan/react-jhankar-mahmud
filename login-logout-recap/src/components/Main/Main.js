import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import NabBar from "../NavBar/NabBar";
import Signup from "../Signup/Signup";
import Subscribe from "../Subscribe/Subscribe";

const Main = () => {
  return (
    <div>
        <NabBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default Main;
