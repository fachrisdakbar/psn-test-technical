'use client';

import React from 'react';
import { Toast } from 'primereact/toast';
import { DashboardHeader } from './DashboardHeader';
import { CommentsTable } from '@/app/components/tables/CommentsTable';

export const DashboardPage = ({
  comments,
  globalFilter,
  loading,
  toast,
  onSearchChange,
  onCreateClick,
  onLogoutClick,
  onDeleteComment
}) => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      padding: '1.5rem'
    }}>
      <Toast ref={toast} />
      
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{
          background: 'white',
          borderRadius: '1.5rem',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          overflow: 'hidden'
        }}>
          <div style={{ padding: '2rem' }}>
            <DashboardHeader
              globalFilter={globalFilter}
              onSearchChange={onSearchChange}
              onCreateClick={onCreateClick}
              onLogoutClick={onLogoutClick}
            />
            
            <div style={{ marginTop: '1.5rem' }}>
              <CommentsTable
                comments={comments}
                loading={loading}
                onDelete={onDeleteComment}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};