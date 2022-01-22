import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
      let navigate = useNavigate();
      const handleLogout = () => {
            sessionStorage.removeItem('Auth Token');
            navigate('/login')
        }
      useEffect(() => {
            let authToken = sessionStorage.getItem('Auth Token');
            authToken? (navigate('/home')): navigate('/login');
      }, [])
      return (
            <div>
                  <h1>this is home page</h1>
                  <Button variant='contained' onClick={handleLogout}>log out</Button>
            </div>
      );
};

export default Home;