import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Error from "./components/Error";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Shop from "./components/Shop";

function App() {
  return (
    <Router>
            <Nav/>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
      <Route  component={Error}/>
      

    </Routes>
  </Router>
  );
}

export default App;
