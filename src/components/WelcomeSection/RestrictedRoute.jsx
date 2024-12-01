import Loader from 'components/Loader/Loader.jsx';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';
import { selectAuthIsLoggedIn, selectAuthToken } from 'redux/auth/selector.js';

const RestrictedRoute = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const token = useSelector(selectAuthToken);

  if (token && !isLoggedIn) {
    return <Loader />;
  }

  if (token && isLoggedIn) {
    return <Navigate to={'/tracker'} />;
  }

  return <Outlet />;
};

export default RestrictedRoute;
