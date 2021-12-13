import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useContext } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { categoryContext } from '../../App';
import firebaseConfig from "../../firebase.config";


const SignIn = () => {
    const [loggedinUser, setLoggedinUser] = useContext(categoryContext);
    const location = useLocation();
    const navigate = useNavigate();
    let { from } = location.state || { from: { pathname: "/" } };

    const provider = new GoogleAuthProvider();
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleClick = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
        //   const credential = GoogleAuthProvider.credentialFromResult(result);
        //   const token = credential.accessToken;
          // The signed-in user info.
          const {displayName, email} = result.user;
          const userInfo ={
              name: displayName,
              email
          }
          setLoggedinUser(userInfo);
          navigate.replace(from);
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;

          console.log(errorCode, errorMessage);
        //   // The email of the user's account used.
        //   const email = error.email;
        //   // The AuthCredential type that was used.
        //   const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    }

    return (
        <div>
            <h1>this is SignIn page</h1>
            <button onClick={handleClick}>click here</button>
        </div>
    );
};

export default SignIn;