import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import "./App.css";
import firebaseConfig from "./firebase.config";

function App() {
  const [user, setUser] = useState({
    isSignIn: false,
    name: "",
    email: "",
    photo: ""
  });
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  let handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        let { displayName, email, photoURL } = res.user;
        let userSignIn = {
          isSignIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(userSignIn);
      })
      .catch((err) => console.log(err));
  };

  let handleSignOut =() => {
    signOut(auth).then(() => {
      let userSignOut ={
        isSignIn: false,
        name: "",
        email: "",
        photo: ""
      }
      setUser(userSignOut);
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div className="App">

      {
        user.isSignIn? <button onClick={handleSignOut}>Sign Out</button>: 
        <button onClick={handleSignIn}>Sign In</button>

      }

      {user.isSignIn && (
        <div>
          <p>welcome {user.name}</p>
          <p>email {user.email}</p>
          <img src={user.photo} alt=""></img>
        </div>
      )}
    </div>
  );
}

export default App;
