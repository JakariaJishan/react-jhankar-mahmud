import {
      createUserWithEmailAndPassword,
      getAuth,
      signInWithEmailAndPassword
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { app } from "../../firebase.config";
import Form from "../Form/Form";
const Main = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleAction = (id) => {
    const auth = getAuth(app);
    if (id === 2)
      createUserWithEmailAndPassword(auth, user, password)
        .then((res) => {
          console.log(res);
          navigate("/home");
          sessionStorage.setItem("Auth Token", res._tokenResponse.refreshToken);
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            toast.error("Email Already in Use");
          }
        });
    if (id === 1) {
      signInWithEmailAndPassword(auth, user, password)
        .then((response) => {
          navigate("/home");
          sessionStorage.setItem(
            "Auth Token",
            response._tokenResponse.refreshToken
          );
        })
        .catch((err) => {
              console.log(err)
          if (err.code === "auth/wrong-password") {
            toast.error("Please check the Password");
          }
          if (err.code === 'auth/invalid-email'){
                toast.error('invalid email or password')
          }
          if (err.code === "auth/user-not-found") {
            toast.error("Please check the Email");
          }
        });
    }
  };
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/home");
    }
  }, []);
  return (
    <>
      <div>
        <h1>firebase auth with protected route</h1>
        <Routes>
          <Route
            path="/register"
            element={
              <Form
                setUser={setUser}
                setPassword={setPassword}
                title={"register"}
                handleAction={() => handleAction(2)}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Form
                setUser={setUser}
                setPassword={setPassword}
                title={"login"}
                handleAction={() => handleAction(1)}
              />
            }
          />
        </Routes>
      </div>
        <ToastContainer />
    </>
  );
};

export default Main;
