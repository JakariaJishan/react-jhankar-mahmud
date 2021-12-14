import React, { useReducer } from "react";

const initialState = { count: 0 };
function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "INCREMENT":
      return { hsedcount: state.count + 1 };
    default:
      return state;
  }
}

const ReducerCount = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div>
      <h1>hello reducer {state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>increment</button>
    </div>
  );
};

export default ReducerCount;
