'use client';

import React from 'react';
import {Toast} from "primereact/toast";
import {GradientButton} from "../ui/GradientButton";
import {CustomInput} from "../ui/CustomInput";
import {animationStyles} from "../../styles/animations";
import { useResponsive } from '@/app/hooks/useResponsive';

export const LoginPage = ({ loginForm, loginErrors, toast, onFormChange, onLogin }) => {
  const { isMobile } = useResponsive();

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isMobile ? '1rem' : '2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
      
      {/* Animated background circles */}
      <div style={{
        position: 'absolute',
        width: isMobile ? '300px' : '500px',
        height: isMobile ? '300px' : '500px',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.1)',
        top: isMobile ? '-150px' : '-250px',
        left: isMobile ? '-150px' : '-250px',
        animation: 'float 20s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute',
        width: isMobile ? '250px' : '400px',
        height: isMobile ? '250px' : '400px',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.08)',
        bottom: isMobile ? '-125px' : '-200px',
        right: isMobile ? '-125px' : '-200px',
        animation: 'float 15s ease-in-out infinite reverse'
      }} />
      
      <Toast ref={toast} />
      <div style={{
        background: 'white',
        borderRadius: '1.5rem',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        width: '100%',
        maxWidth: '28rem',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
          padding: isMobile ? '2rem 1.5rem' : '3rem 2rem',
          textAlign: 'center',
          position: 'relative'
        }}>
          <div style={{
            width: isMobile ? '60px' : '80px',
            height: isMobile ? '60px' : '80px',
            background: 'white',
            borderRadius: '50%',
            margin: '0 auto 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
            animation: 'bounce 2s ease-in-out infinite'
          }}>
            <i className="pi pi-comments" style={{ fontSize: isMobile ? '2rem' : '2.5rem', color: '#3b82f6' }}></i>
          </div>
          <h1 style={{
            fontSize: isMobile ? '1.5rem' : '2rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '0.5rem',
            margin: 0
          }}>
            Comment Manager
          </h1>
          <p style={{ 
            color: 'rgba(255, 255, 255, 0.9)', 
            fontSize: isMobile ? '0.875rem' : '1rem', 
            margin: '0.5rem 0 0 0' 
          }}>
            Welcome back! Please sign in to continue
          </p>
        </div>
        
        <div style={{ padding: isMobile ? '1.5rem' : '2.5rem 2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <CustomInput
              label="Username"
              value={loginForm.username}
              onChange={(value) => onFormChange('username', value)}
              onKeyPress={(e) => e.key === 'Enter' && onLogin(e)}
              placeholder="Enter your username"
              error={loginErrors.username}
            />

            <CustomInput
              label="Password"
              type="password"
              value={loginForm.password}
              onChange={(value) => onFormChange('password', value)}
              onKeyPress={(e) => e.key === 'Enter' && onLogin(e)}
              placeholder="Enter your password"
              error={loginErrors.password}
            />

            <GradientButton
              label="Sign In"
              icon="pi pi-sign-in"
              onClick={onLogin}
              variant="primary"
              fullWidth
            />
          </div>
        </div>
      </div>
    </div>
  );
};
