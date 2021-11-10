import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { Card, Button, Alert } from 'react-bootstrap';

import { useAuth } from '../store/auth-context';

const Dashboard = () => {
  const [error, setError] = useState('');

  const { currentUser, logOut } = useAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    setError('');
    try {
      await logOut();
      navigate('/login');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email: </strong>
          {currentUser?.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  );
};

export default Dashboard;
