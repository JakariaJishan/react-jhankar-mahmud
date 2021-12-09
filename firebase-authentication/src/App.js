import { initializeApp } from "firebase/app";
import "firebase/auth";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import "./App.css";
import firebaseConfig from "./firebase.config";

function App() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignIn: false,
    name: "",
    email: "",
    password: '',
    photo: "",
    error: '',
    success: false
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

// email authentication action

 let handleChange =(e) => {
   let isValid;
  if(e.target.name ==='name'){
    isValid = true;
  }
   if(e.target.name === 'email'){
    isValid = /\S+@\S+\.\S+/.test(e.target.value);
   }
   if ( e.target.name ==='password'){
    isValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(e.target.value);
   }
   
   if(isValid){
     let newValidation = {...user};
     newValidation[e.target.name] = e.target.value;
     setUser(newValidation);
   }else{
     console.log('kisuna')
   }
 }

let handleSubmit = (e) =>{
  e.preventDefault();
  if (newUser && user.name && user.email && user.password){
    const auth = getAuth();
    createUserWithEmailAndPassword (auth,user.email, user.password)
    .then((res) => {
      let newUserInfo = {...user};
      newUserInfo.error = '';
      newUserInfo.success = true;
      setUser(newUserInfo);
    // Signed in 
    // const user = userCredential.user;
    // // ...
    // console.log(res);
  })
  .catch((error) => {
    let newUserInfo = {...user};
    newUserInfo.error = error.message;
    setUser(newUserInfo);
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // console.log(errorCode, errorMessage);
  });
  }


  if (newUser && user.name && user.email && user.password){
    const auth = getAuth();
    signInWithEmailAndPassword (auth,user.email, user.password)
    .then((res) => {
      let newUserInfo = {...user};
      newUserInfo.error = '';
      newUserInfo.success = true;
      setUser(newUserInfo);
    // Signed in 
    // const user = userCredential.user;
    // // ...
    // console.log(res);
  })
  .catch((error) => {
    let newUserInfo = {...user};
    newUserInfo.error = error.message;
    setUser(newUserInfo);
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // console.log(errorCode, errorMessage);
  });
  }
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

      {/* email authentication */}

      <h1>my own authentication</h1>
      <input type="checkbox" name="newUser" onChange={() => setNewUser(!newUser)} /> <label>sign up</label>
      <form onSubmit={handleSubmit}>
        {newUser && <input type="text" name="name" onBlur={handleChange}  placeholder='your name'></input>}
        <br/>
        <input type="email" placeholder="enter your email" name="email" required onBlur={handleChange}></input>
        <br/>
        <input type="password" name="password" placeholder='password' required onBlur={handleChange}></input>
        <br/>
        <input type="submit" value="submit"></input>

      </form>
      <p style={{color: 'red'}}>{user.error}</p>
      {user.success && <p style={{color: 'green'}}>user {newUser? 'created' : 'logged in'} successfully</p>}
    </div>
  );
}

export default App;
