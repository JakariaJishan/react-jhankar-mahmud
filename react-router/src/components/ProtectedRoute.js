import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({userAuth}) => {
      const navigate = useNavigate();
      let user = false;
      user? (navigate('/navigate')): (navigate('/'))
      navigate('/navigate', {replace: true});
      return (
            <div>
                  asdf
            </div>
      );
};

export default ProtectedRoute;