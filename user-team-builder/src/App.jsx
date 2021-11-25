import { useEffect, useState } from 'react';
import './App.css';
import User from './componants/User/User';

function App() {
  const [user, setUser] = useState([]);
  const [team, setTeam] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
    .then(res => res.json())
    .then(data => {
     setUser(data.results);    
    })
  },[])
  let handleTeam = (name) =>{
    setTeam([...team, name]);
  }

  return (
    <div className="App">
      
     
      <h1>jack </h1>
     
      <div style={{float: "right",
    margin: "2em",
    border: "3px solid white",
    borderRadius: "10px",
    background: "lightgoldenrodyellow",
    padding: "1rem",
    boxShadow: "0 3px 100px rgb(0 0 255 / 50%)"}}>
      {
      team.map((m) => <h3>{m}</h3>)
      }
      </div>
      {
        user.map((ele) => <User user={ele} handleTeam = {handleTeam} ></User>)
      }
     
        
     
    </div>
  );
}

export default App;
