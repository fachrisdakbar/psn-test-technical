"use client";

import React from "react";
import { InputText } from "primereact/inputtext";

export const CustomInput = ({
  label,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
  required = false,
  onKeyPress,
}) => {
  return (
    <div>
      <label
        style={{
          display: "block",
          fontSize: "0.875rem",
          fontWeight: "600",
          color: "#374151",
          marginBottom: "0.5rem",
        }}
      >
        {label} {required && <span style={{ color: "red" }}>*</span>}
      </label>
      <InputText
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        onKeyPress={onKeyPress}
        className={error ? "p-invalid" : ""}
        style={{
          width: "100%",
          padding: "0.5rem",
          border: error ? "1px solid red" : "1px solid #d1d5db",
          borderRadius: "0.375rem",
          boxSizing: "border-box",
        }}
      />
      {error && (
        <small
          style={{
            color: "#ef4444",
            marginTop: "0.375rem",
            display: "block",
            fontWeight: "500",
          }}
        >
          {error}
        </small>
      )}
    </div>
  );
};
