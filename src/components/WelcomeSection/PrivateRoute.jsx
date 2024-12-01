// import { Navigate } from 'react-router-dom';

import Loader from 'components/Loader/Loader.jsx';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';
import {
  selectAuthIsLoggedIn,
  selectAuthToken,
} from '../../redux/auth/selector.js';

// const PrivateRoute = ({ children }) => {
//   const isAuthenticated = Boolean(localStorage.getItem('authToken'));
//   return isAuthenticated ? children : <Navigate to="/signin" />;
// };

// export default PrivateRoute;
export const PrivateRoute = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const token = useSelector(selectAuthToken);

  if (!isLoggedIn && token) {
    return <Loader />;
  }

  if (!isLoggedIn && !token) {
    return <Navigate to={'/signin'} />;
  }

  return <Outlet />;
};

export default PrivateRoute;
