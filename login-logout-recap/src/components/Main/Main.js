import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword
} from "firebase/auth";
import React, { useState } from "react";
import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { app } from "../../firebase.config";
import About from "../About/About";
import Home from "../Home/Home";
import Login from "../Login/Login";
import NabBar from "../NavBar/NabBar";
import Signup from "../Signup/Signup";
import Subscribe from "../Subscribe/Subscribe";

const Main = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        // Signed in
        sessionStorage.setItem(
          "access token",
          res.user.stsTokenManager.refreshToken
        );

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  const handleSignUp = () => {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        // Signed in
        console.log(res.user.stsTokenManager.refreshToken);
        sessionStorage.setItem(
          "access token",
          res.user.stsTokenManager.refreshToken
        );

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  const PrivateRoute = () => {
    let accessToken = sessionStorage.getItem("access token");
    return accessToken ? <Outlet /> : <Navigate to="/login" />;
  };
  return (
    <div>
      <NabBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<PrivateRoute />}>
          <Route path="subscribe" element={<Subscribe />} />
          <Route path="about" element={<About />} />
        </Route>

        <Route
          path="/login"
          element={
            <Login
              setEmail={setEmail}
              setPassword={setPassword}
              handleLogin={handleLogin}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <Signup
              setEmail={setEmail}
              setPassword={setPassword}
              handleSignUp={handleSignUp}
              setUser={setUser}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Main;
