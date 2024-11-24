// import { lazy } from 'react';
// import { Route, Routes } from 'react-router-dom';
import UserBar from "./components/UserBar/UserBar";

// const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
// const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'));
// const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
// const TrackerPage = lazy(() => import('./pages/TrackerPage/TrackerPage'));

function App() {
  return (
    <div>
      <h1>HomePage</h1>
      <UserBar
        name="Nadia"
        avatarUrl="https://example.com/avatar.jpg" //  ссылка на аватар пользователя
      />
    </div>
    

    // <Routes>
    //   <Route path="/" element={<HomePage />} />
    //   <Route path="/signup" element={<SignUpPage />} />
    //   <Route path="/signin" element={<SignInPage />} />
    //   <Route path="/tracker" element={<TrackerPage />} />
    // </Routes>
  );
}

export default App;
