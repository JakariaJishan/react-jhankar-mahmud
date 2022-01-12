import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import SignIn from "./components/SignIn/SignIn";

export const categoryContext = createContext();

function App() {
  const [loggedinUser, setLoggedinUser] = useState({});
  return (
    <categoryContext.Provider value={[loggedinUser, setLoggedinUser]}>
      <h1>name: {loggedinUser.name}</h1>
      <BrowserRouter>
        <h1>Hello, React Router!</h1>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route exact path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </categoryContext.Provider>
  );
}

export default App;
