import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/shop'>Shop</Link>
            <Link to='/navigate'>navigate</Link>
        </div>
    );
};

export default Nav;