import React from 'react';

const Home = () => {
    const handleClick = () => {
        console.log('clicked');
    }
    return (
        <div>
            <h1>this is home page</h1>
            <button onClick={handleClick}>click here</button>
        </div>
    );
};

export default Home;