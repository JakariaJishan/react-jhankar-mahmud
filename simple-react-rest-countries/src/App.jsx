import { useEffect, useState } from 'react';
import './App.css';
import Cart from './componants/Cart/Cart';
import Country from './componants/Country/Country';

function App() {
  const [world, setWorld] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => {
      setWorld(data);
      // console.log(data);
    })
    
  }, [])
  const loadCountries = (name) => {
    // // console.log("added click", name);
    let newCart = [...cart, name];
    setCart(newCart);
  };

  return (
    <div className="App" style={{background:"lightgray"}}>
      <h1 style={{margin: 0}}>countries: {world.length}</h1>
      <h2>country added: {cart.length}</h2>
      <Cart cart={cart}></Cart>
      <ul>
        {
        world.map(ele => <Country name={ele} loadCountries={loadCountries}></Country> )
        }
      </ul>
    </div>
  );
}

export default App;
