import React from "react";

const Menu = ({ dishes, handleDishes }) => {
  return (
    <div>
      <h3>
        {dishes.title}
        <span>
          <button onClick={() => handleDishes(dishes)}>show details</button>
        </span>
      </h3>
    </div>
  );
};

export default Menu;
