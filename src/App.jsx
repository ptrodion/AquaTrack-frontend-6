import Loader from 'components/Loader/Loader.jsx';
import SharedLayout from 'components/SharedLayout/SharedLayout.jsx';
import PrivateRoute from 'components/WelcomeSection/PrivateRoute.jsx';
import RestrictedRoute from 'components/WelcomeSection/RestrictedRoute.jsx';
import { lazy, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations.js';
import { selectAuthIsRefreshing } from 'redux/auth/selector.js';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const TrackerPage = lazy(() => import('./pages/TrackerPage/TrackerPage'));

const TestPage = lazy(() => import('./pages/TestPage/TestPage'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectAuthIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <SharedLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<RestrictedRoute />}>
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/tracker" element={<TrackerPage />} />
          </Route>
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </SharedLayout>
    </>
  );
}

export default App;
