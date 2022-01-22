import React from 'react';

const ShowDetails = ({displayDishes}) => {
    return (
        <div>
            <h1 style={{color: 'red'}}>{displayDishes.id}</h1>
        </div>
    );
};

export default ShowDetails;