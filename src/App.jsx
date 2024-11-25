<<<<<<< HEAD
// import { lazy } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import UserPanel from "./components/UserPanel/UserPanel";
// import UserBar from "./components/UserBar/UserBar";

=======
import SharedLayout from 'components/SharedLayout/SharedLayout.jsx';
import { lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
>>>>>>> main

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const TrackerPage = lazy(() => import('./pages/TrackerPage/TrackerPage'));

function App() {
  return (
<<<<<<< HEAD
    <div>
      <h1>HomePage</h1>
      {/* <UserPanel />
      <UserBar
        name="Nadia"
        avatarUrl="https://example.com/avatar.jpg"
      /> */}
    </div>
    

    // <Routes>
    //   <Route path="/" element={<HomePage />} />
    //   <Route path="/signup" element={<SignUpPage />} />
    //   <Route path="/signin" element={<SignInPage />} />
    //   <Route path="/tracker" element={<TrackerPage />} />
    // </Routes>
=======
    <SharedLayout>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/tracker" element={<TrackerPage />} />
      </Routes>
    </SharedLayout>
>>>>>>> main
  );
}

export default App;
