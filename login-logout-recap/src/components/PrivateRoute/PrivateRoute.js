import { Navigate, useNavigate } from "react-router-dom";

const PrivateRoute = ( {children}) => {
  let navigate = useNavigate();
  let auth = sessionStorage.getItem("access token");
  return auth ? children : <Navigate to='/signup'/>;
};

export default PrivateRoute;
