'use client';

import React from 'react';
import { InputText } from 'primereact/inputtext';
import { GradientButton } from '../ui/GradientButton';
import { useResponsive } from '@/app/hooks/useResponsive';

export const DashboardHeader = ({ globalFilter, onSearchChange, onCreateClick, onLogoutClick }) => {
  const { isMobile, isTablet } = useResponsive();

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      paddingBottom: '1rem',
      borderBottom: '2px solid #e5e7eb'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: isMobile ? 'flex-start' : 'center',
        gap: '1rem'
      }}>
        <div>
          <h2 style={{
            fontSize: isMobile ? '1.5rem' : '1.875rem',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: 0,
            marginBottom: '0.25rem'
          }}>
            Commentary Dashboard
          </h2>
          <p style={{ 
            color: '#6b7280', 
            fontSize: isMobile ? '0.8rem' : '0.875rem', 
            margin: 0 
          }}>
            Manage the comments efficiently and effectively
          </p>
        </div>
        
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: '0.75rem',
          width: isMobile ? '100%' : 'auto'
        }}>
          <GradientButton
            label={isMobile ? "Create" : "Create Comment"}
            icon="pi pi-plus"
            onClick={onCreateClick}
            variant="success"
            fullWidth={isMobile}
            size={isMobile ? 'small' : 'normal'}
          />
          <GradientButton
            label="Logout"
            icon="pi pi-sign-out"
            onClick={onLogoutClick}
            variant="danger"
            fullWidth={isMobile}
            size={isMobile ? 'small' : 'normal'}
          />
        </div>
      </div>
      
      <div style={{ position: 'relative', width: '100%' }}>
        <span className="p-input-icon-left" style={{ width: '100%' }}>
          <i className="pi pi-search" style={{ color: '#9ca3af', left: '1rem' }} />
          <InputText
            type="search"
            value={globalFilter}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={isMobile ? "Search..." : "Search by name, email, or comment..."}
            style={{
              width: '100%',
              paddingLeft: '2.5rem',
              borderRadius: '0.75rem',
              border: '2px solid #e5e7eb',
              fontSize: isMobile ? '0.8rem' : '0.875rem'
            }}
          />
        </span>
      </div>
    </div>
  );
};