import React from 'react';
import { Link } from 'react-router-dom';

const NabBar = () => {
      return (
            <div>
                  <Link to={'/'}>Home</Link>
                  <Link to={'/subscribe'}>Subscribe</Link>
                  <Link to={'/login'}>Login</Link>
                  
            </div>
      );
};

export default NabBar;