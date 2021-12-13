import React, { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import { categoryContext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const [loggedinUser, setLoggedinUser] = useContext(categoryContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedinUser.email ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: "/signin",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
