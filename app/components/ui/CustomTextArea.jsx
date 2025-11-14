'use client';

import React from 'react';

export const CustomTextArea = ({
    label,
    value,
    onChange,
    placeholder = '',
    error = '',
    required = false,
    rows = 5,
}) => {
    return (
        <div>
            <label style={{
                display:'block',
                fontSize:'0.875rem',
                fontWeight:'500',
                marginBottom:'0.5rem',
            }}>
                {label} {required && <span style={{ color: 'red' }}>*</span>}
            </label>
            <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            rows={rows}
            style={{
                width: '100%',
                padding: '0.75rem 1rem',
                border: error ? '1px solid red' : '1px solid #ccc',
                borderRadius: '0.25rem',
                fontSize: '0.9375rem',
                fontFamily: 'inherit',
                resize: 'vertical',
                outline: 'none',
                transition: 'all 0.2s'
            }}
            />
            {error && (
                <small style={{
                    color:'#ef4444',
                    marginTop:'0.375rem',
                    display:'block',
                    fontWeight:'500'
                }}>{error}</small>
            )}
        </div>
    );
};