import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAXZBUaBIDAHaH-hhmUa-SYSfz-OO-ckg",
  authDomain: "full-auth-user.firebaseapp.com",
  projectId: "full-auth-user",
  storageBucket: "full-auth-user.appspot.com",
  messagingSenderId: "20594572366",
  appId: "1:20594572366:web:416a439c6e2af917e0971f",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
