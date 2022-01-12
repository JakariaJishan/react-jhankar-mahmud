import { initializeApp } from "firebase/app";
import { deleteUser, getAuth } from "firebase/auth";
import firebaseConfig from "../../firebase.config";

const Private = () => {
  const app = initializeApp(firebaseConfig);
  const handleSignOut = () => {
    const auth = getAuth(app);
    const user = auth.currentUser;

    deleteUser(user)
      .then(() => {
        // User deleted.
        console.log("user deledted");

        sessionStorage.removeItem("uid");
      })
      .catch((error) => {
        // An error ocurred
        // ...
        console.log("error");
      });
  };
  return (
    <div>
      this is private
      <button onClick={handleSignOut}>sign out</button>
    </div>
  );
};

export default Private;
