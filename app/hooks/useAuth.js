'use client';

import { useState } from 'react';
import { validateLoginForm } from '../utils/validator';

export const useAuth = (toast) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [loginErrors, setLoginErrors] = useState({ username: '', password: '' });

  const handleLoginFormChange = (field, value) => {
    setLoginForm(prev => ({ ...prev, [field]: value }));
    setLoginErrors(prev => ({ ...prev, [field]: '' }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const errors = validateLoginForm(loginForm);
    setLoginErrors(errors);

    if (!errors.username && !errors.password) {
      setIsAuthenticated(true);
      toast.current?.show({ 
        severity: 'success', 
        summary: 'Success', 
        detail: 'Login successful', 
        life: 3000 
      });
      
    }
  };

const handleLogout = () => {
  setIsAuthenticated(false);
  setLoginForm({ username: '', password: '' });
};
  return {
    isAuthenticated,
    loginForm,
    loginErrors,
    handleLoginFormChange,
    handleLogin,
    handleLogout
  };
};