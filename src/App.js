import React from 'react';
import Signup from './components/Signup';

import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

// import PrivateRoute from './components/PrivateRoute';

import { useAuth } from './store/auth-context';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';

const App = () => {
  const { currentUser } = useAuth();

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <Router>
          <Routes>
            <Route path="/" element={currentUser ? <Dashboard /> : <Login />} />
            <Route path="/update-profile" element={currentUser ? <UpdateProfile /> : <Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="*" element={currentUser ? <Dashboard /> : <Login />} />
          </Routes>
        </Router>
      </div>
    </Container>
  );
};

export default App;
