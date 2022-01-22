import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Main from "./components/main/Main";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Main />
        <Routes>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
