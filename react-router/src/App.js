import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Navigate from "./components/Navigate";
import ProtectedRoute from "./components/ProtectedRoute";
import Shop from "./components/Shop";

function App() {
  const userAuth = {
    auth: true,
  };
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Route path="/navigate" element={<Navigate />} />
            </ProtectedRoute>
          }
        />

        {/* <Route
          path="/"
          element={
            <ProtectedRoute userAuth={userAuth}>
              <Navigate/>
            </ProtectedRoute>
          }
        /> */}
      </Routes>
    </Router>
  );
}

export default App;
