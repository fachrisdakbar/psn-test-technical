'use client';

import React from 'react';
import { Dialog } from 'primereact/dialog';
import { GradientButton } from '../ui/GradientButton';
import { CustomInput } from '../ui/CustomInput';
import { useResponsive } from '@/app/hooks/useResponsive';
import { CustomTextArea } from '../ui/CustomTextArea';

export const CreateCommentDialog = ({ visible, form, errors, onHide, onFormChange, onSubmit }) => {
  const { isMobile } = useResponsive();

  const header = (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.5rem 0' }}>
      <div style={{
        width: isMobile ? '40px' : '48px',
        height: isMobile ? '40px' : '48px',
        borderRadius: '12px',
        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <i className="pi pi-plus" style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', color: 'white' }}></i>
      </div>
      <div>
        <h3 style={{ 
          margin: 0, 
          fontSize: isMobile ? '1.25rem' : '1.5rem', 
          fontWeight: 'bold', 
          color: '#111827' 
        }}>
          Create New Comment
        </h3>
        <p style={{ 
          margin: '0.25rem 0 0 0', 
          fontSize: isMobile ? '0.75rem' : '0.875rem', 
          color: '#6b7280' 
        }}>
          Add a new comment to the list
        </p>
      </div>
    </div>
  );

  return (
    <Dialog
      header={header}
      visible={visible}
      style={{ width: '95vw', maxWidth: isMobile ? '100%' : '650px' }}
      onHide={onHide}
      draggable={false}
      modal
      contentStyle={{ padding: isMobile ? '1rem' : '1.5rem' }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <CustomInput
          label="Name"
          value={form.name}
          onChange={(value) => onFormChange('name', value)}
          placeholder="Enter name"
          error={errors.name}
          required
        />

        <CustomInput
          label="Email"
          type="email"
          value={form.email}
          onChange={(value) => onFormChange('email', value)}
          placeholder="Enter email"
          error={errors.email}
          required
        />

        <CustomTextArea
          label="Comment"
          value={form.body}
          onChange={(value) => onFormChange('body', value)}
          placeholder="Enter your comment here..."
          error={errors.body}
          required
          rows={isMobile ? 4 : 5}
        />

        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column-reverse' : 'row',
          gap: '1rem',
          paddingTop: '1rem',
          borderTop: '2px solid #e5e7eb'
        }}>
          <GradientButton
            label="Cancel"
            icon="pi pi-times"
            onClick={onHide}
            variant="secondary"
            fullWidth={isMobile}
          />
          <GradientButton
            label="Create Comment"
            icon="pi pi-check"
            onClick={onSubmit}
            variant="success"
            fullWidth={isMobile}
          />
        </div>
      </div>
    </Dialog>
  );
};