import Loader from 'components/Loader/Loader.jsx';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';
import {
  selectAuthIsLoggedIn,
  selectAuthToken,
} from '../../redux/auth/selector.js';

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
