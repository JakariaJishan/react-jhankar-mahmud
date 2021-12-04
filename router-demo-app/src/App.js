import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import "./App.css";
import Error from "./components/Error/Error";
import Friend from "./components/Friend/Friend";
import FriendDetail from "./components/FriendDetail/FriendDetail";
import Home from "./components/Home/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/friend" element={<Friend />} />
        <Route path="/friend/:friendId" element={<FriendDetail/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
