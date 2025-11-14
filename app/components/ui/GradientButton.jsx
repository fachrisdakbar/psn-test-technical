"use client";

import React from "react";
import { Button } from "primereact/button";

const gradients = {
  primary: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
  success: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
  danger: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
  secondary: "#f3f4f6",
};

const shadows = {
  primary: "0 10px 15px -3px rgba(102, 126, 234, 0.4)",
  success: "0 4px 6px -1px rgba(16, 185, 129, 0.3)",
  danger: "0 4px 6px -1px rgba(239, 68, 68, 0.3)",
  secondary: "none",
};

export const GradientButton = ({
  label,
  icon,
  onClick,
  variant = "primary",
  fullWidth = false,
  className = "",
}) => {
  return (
    <Button
      label={label}
      icon={icon}
      onClick={onClick}
      className={className}
      style={{
        width: fullWidth ? "100%" : "auto",
        background: gradients[variant],
        border: variant === "secondary" ? "2px solid #d1d5db" : "none",
        color: variant === "secondary" ? "#374151" : "white",
        fontWeight: "600",
        padding: "0.75rem 1.25rem",
        borderRadius: "0.75rem",
        boxShadow: shadows[variant],
      }}
    />
  );
};
