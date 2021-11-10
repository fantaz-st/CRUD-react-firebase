import React, { useContext, useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
} from '@firebase/auth';

import { auth } from '../firebase-config';

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsub;
  }, []);

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const updateEmailHandler = (email) => {
    return updateEmail(currentUser, email);
  };

  const updatePasswordHandler = (password) => {
    return updatePassword(currentUser, password);
  };

  const value = {
    currentUser,
    signUp,
    logIn,
    logOut,
    resetPassword,
    updatePasswordHandler,
    updateEmailHandler,
  };
  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};
