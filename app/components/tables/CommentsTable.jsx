'use client'

import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { useResponsive } from '@/app/hooks/useResponsive';

export const CommentsTable = ({ comments, loading, onDelete }) => {
  const { isMobile } = useResponsive();

  const idBodyTemplate = (rowData) => {
    return (
      <span style={{
        background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
        color: 'white',
        padding: '0.25rem 0.75rem',
        borderRadius: '9999px',
        fontSize: isMobile ? '0.7rem' : '0.75rem',
        fontWeight: 'bold'
      }}>
        #{rowData.id}
      </span>
    );
  };

  const nameBodyTemplate = (rowData) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '0.5rem' : '0.75rem' }}>
        <div style={{
          width: isMobile ? '32px' : '40px',
          height: isMobile ? '32px' : '40px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: isMobile ? '14px' : '16px',
          flexShrink: 0
        }}>
          {rowData.name.charAt(0).toUpperCase()}
        </div>
        <span style={{ 
          fontWeight: '600', 
          color: '#1f2937',
          fontSize: isMobile ? '0.8rem' : '0.875rem',
          wordBreak: 'break-word'
        }}>
          {rowData.name}
        </span>
      </div>
    );
  };

  const emailBodyTemplate = (rowData) => {
    return (
      <span style={{ 
        color: '#3b82f6', 
        fontWeight: '500',
        fontSize: isMobile ? '0.75rem' : '0.875rem',
        wordBreak: 'break-all'
      }}>
        {rowData.email}
      </span>
    );
  };

  const bodyTemplate = (rowData) => {
    return (
      <div style={{ maxWidth: isMobile ? '200px' : '400px' }}>
        <p style={{ 
          color: '#6b7280', 
          fontSize: isMobile ? '0.75rem' : '0.875rem', 
          lineHeight: '1.5', 
          margin: 0,
          wordBreak: 'break-word'
        }}>
          {rowData.body}
        </p>
      </div>
    );
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-danger p-button-text p-button-sm"
          onClick={() => onDelete(rowData.id)}
          tooltip="Delete"
          tooltipOptions={{ position: 'top' }}
          style={{ fontSize: isMobile ? '0.75rem' : '1rem' }}
        />
      </div>
    );
  };

  return (
    <DataTable
      value={comments}
      paginator
      rows={isMobile ? 5 : 10}
      rowsPerPageOptions={isMobile ? [5, 10] : [5, 10, 25, 50]}
      loading={loading}
      emptyMessage="No comments found"
      responsiveLayout="scroll"
      stripedRows
      rowHover
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords} comments"
      style={{ fontSize: isMobile ? '0.75rem' : '0.875rem' }}
    >
      <Column
        field="id"
        header="ID"
        body={idBodyTemplate}
        sortable
        style={{ width: isMobile ? '60px' : '100px' }}
        headerStyle={{ background: '#f9fafb', fontWeight: '700', color: '#374151', fontSize: isMobile ? '0.75rem' : '0.875rem' }}
      />
      <Column
        field="name"
        header="Name"
        body={nameBodyTemplate}
        sortable
        style={{ minWidth: isMobile ? '150px' : '250px' }}
        headerStyle={{ background: '#f9fafb', fontWeight: '700', color: '#374151', fontSize: isMobile ? '0.75rem' : '0.875rem' }}
      />
      <Column
        field="email"
        header="Email"
        body={emailBodyTemplate}
        sortable
        style={{ minWidth: isMobile ? '180px' : '220px' }}
        headerStyle={{ background: '#f9fafb', fontWeight: '700', color: '#374151', fontSize: isMobile ? '0.75rem' : '0.875rem' }}
      />
      <Column
        field="body"
        header="Comment"
        body={bodyTemplate}
        style={{ minWidth: isMobile ? '200px' : '350px' }}
        headerStyle={{ background: '#f9fafb', fontWeight: '700', color: '#374151', fontSize: isMobile ? '0.75rem' : '0.875rem' }}
      />
      <Column
        body={actionBodyTemplate}
        header="Actions"
        exportable={false}
        style={{ width: isMobile ? '80px' : '100px', textAlign: 'center' }}
        headerStyle={{ background: '#f9fafb', fontWeight: '700', color: '#374151', fontSize: isMobile ? '0.75rem' : '0.875rem' }}
      />
    </DataTable>
  );
};
