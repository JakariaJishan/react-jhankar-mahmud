import React from "react";
import { useNavigate } from "react-router-dom";

const Friend = ({ friend }) => {
  //  let {name} =  props.friend?;
  //    console.log(friend);
  let history = useNavigate();

  function handleClick(x) {
    console.log(x);
    history(`/friend/${x}`);
  }
  return (
    <div>
      <div
        style={{
          border: "1px solid royalblue",
          margin: "1rem",
          padding: " 1rem",
        }}
      >
        {/* <h2>this is friend page</h2> */}
        <p>{friend?.name}</p>
        <p>{friend?.email}</p>
        {/* <p>
          <Link to={`/friend/${friend?.id}`}>show details {friend?.id}</Link>
        </p> */}
        <button onClick={() => {handleClick(friend?.id)}}>click me</button>
      </div>
    </div>
  );
};

export default Friend;
