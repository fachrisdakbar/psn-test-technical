"use client";

import React, { useRef, useState, useEffect } from "react";
import { LoginPage } from "@/app/components/auth/LoginPage";
import { DashboardPage } from "@/app/components/dashboard/DashboardPage";
import { CreateCommentDialog } from "@/app/components/comments/CreateCommentDialog";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { useComments } from "./hooks/useComments";
import { useAuth } from "./hooks/useAuth";

export default function CommentApp() {
  const toast = useRef(null);
  const [showLogoutToast, setShowLogoutToast] = useState(false);
  const [showLoginToast, setShowLoginToast] = useState(false);

  const {
    isAuthenticated,
    loginForm,
    loginErrors,
    handleLoginFormChange,
    handleLogin,
    handleLogout: logout,
  } = useAuth(toast);

  const {
    comments,
    globalFilter,
    loading,
    showCreateDialog,
    createForm,
    createErrors,
    setGlobalFilter,
    setShowCreateDialog,
    handleDeleteComment,
    handleCreateFormChange,
    handleCreateComment,
    handleCloseDialog,
    resetComments,
  } = useComments(isAuthenticated, toast);

  useEffect(() => {
    if (!isAuthenticated && showLogoutToast) {
      toast.current?.show({
        severity: "success",
        summary: "Logged Out",
        detail: "You have been logged out successfully",
        life: 3000,
      });
      setShowLogoutToast(false);
    }
  }, [isAuthenticated, showLogoutToast]);

  useEffect(() => {
    if (isAuthenticated && showLoginToast) {
      toast.current?.show({
        severity: "success",
        summary: "Success",
        detail: "Login successful",
        life: 3000,
      });
      setShowLoginToast(false);
    }
  }, [isAuthenticated, showLoginToast]);

  const handleLogout = () => {
    setShowLogoutToast(true);
    logout();
    resetComments();
  };

  if (!isAuthenticated) {
    return (
      <LoginPage
        loginForm={loginForm}
        loginErrors={loginErrors}
        toast={toast}
        onFormChange={handleLoginFormChange}
        onLogin={(e) => {
          handleLogin(e);
          setShowLoginToast(true);
        }}
      />
    );
  }

  return (
    <>
      <DashboardPage
        comments={comments}
        globalFilter={globalFilter}
        loading={loading}
        toast={toast}
        onSearchChange={setGlobalFilter}
        onCreateClick={() => setShowCreateDialog(true)}
        onLogoutClick={handleLogout}
        onDeleteComment={handleDeleteComment}
      />

      <CreateCommentDialog
        visible={showCreateDialog}
        form={createForm}
        errors={createErrors}
        onHide={handleCloseDialog}
        onFormChange={handleCreateFormChange}
        onSubmit={handleCreateComment}
      />
    </>
  );
}
