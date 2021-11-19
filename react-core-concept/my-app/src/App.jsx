import { useEffect, useState } from 'react';
import './App.css';

function App() {
  let productList = [
    {
      name: 'photoshop',
      price: '$99'
    },
    {
      name: 'illustrator',
      price:'$20'
    },
    {
      name: 'premier pro',
      price:'$200'
    }
  ]

  return (
    <div className="App">
      <header className="App-header">
      <Counter></Counter>
      <Users></Users>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <Person name="jack" job="coder"></Person>
        <Person name="joe" job="programmer"></Person>
        <Person name="william" job="software man"></Person> */}
       {/* <Product list = {productList[0].name} price={productList[0].price}></Product>
       <Product list = {productList[1].name} price={productList[1].price}></Product> */}
       {
         productList.map(ele => <Product productItem = {ele}></Product>)
       }
       {/* <Product productItem = {productList[0]}></Product>
       <Product productItem = {productList[1]}></Product> */}
       
      </header>
    </div>
  );
}

function Users() {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
      setUsers(data);
    })
    
  }, [])

  return(
    <div>
      <ul>users: {
        users.map(ele => <li>{ele.name}</li>)
        }</ul>
      
    </div>
  )
}

function Counter(){
  let [count, setCount] = useState(0);
  return(
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}


function Product(props) {
  let style = {
    border: "3px solid orange",
    borderRadius: '10px',
    backgroundColor: 'lightgray',
    color: 'black',
    height: '200px',
    width: '200px',
    margin: '24px'
  }
  let {name, price} = props.productItem;

  return (
    <div style={style}>
      <p>{name}</p>
      <p>price: {price}</p>
      <button>buy now</button>
    </div>
  )
}

function Person(props){
  let style = {
    border: "3px solid red",
    margin: "4px",
    padding: "1rem",
    width: "500px"
  }
  return(
    <div style={style}>
      <h2>name : {props.name}</h2>
      <h2>job : {props.job}</h2>
    </div>
  )
}



export default App;
