import './App.css';
import logo from './logo.svg';

function App() {
  let x ={
    color: "red",
    backgroundColor : "yellow"
  }
  let person = {
    name : "jack"
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>hello world</h1>
        
        <Myapp></Myapp>
        <Myapp></Myapp>
        <Myapp></Myapp>
      </header>
    </div>
  );
}

function Myapp(){
  let myStyle ={
    color: "royalblue",
    border: "5px solid red"
  }
  return (
    <div>
      <h2 style ={{border:"2px solid orange", color: "gray"}}>jack bro</h2>
    </div>
  )
}

export default App;
