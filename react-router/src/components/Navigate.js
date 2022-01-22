import React from "react";
import { useNavigate } from "react-router-dom";

const Navigate = ({userAuth}) => {
      let x = false;
  let navigate = useNavigate();
  const goHome = () => {
        x? (navigate('/navigate')): (navigate('/'))
  };

  return (
    <div>
      <h1>Navigate page here!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, modi!
      </p>
      <button onClick={goHome}>Go to home page</button>
    </div>
  );
};

export default Navigate;