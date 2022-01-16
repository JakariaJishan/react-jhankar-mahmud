import React from 'react';

const Menu = ({dishes}) => {
    console.log(dishes);
    return (
        <div>
           <h3>{dishes.title}</h3> 
        </div>
    );
};

export default Menu;