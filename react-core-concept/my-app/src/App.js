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
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <h1 style={x}>hello {person.name}</h1>
        <h1 style={{backgroundColor: "royalblue", color: 'red'}}>hello world</h1>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
