'use client';

import { useState, useEffect } from 'react';
import { validateCommentForm } from '../utils/validator';

export const useComments = (isAuthenticated, toast) => {
  const [comments, setComments] = useState([]);
  const [filteredComments, setFilteredComments] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [loading, setLoading] = useState(false);
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [createForm, setCreateForm] = useState({ name: '', email: '', body: '' });
  const [createErrors, setCreateErrors] = useState({ name: '', email: '', body: '' });

  // Fetch comments when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchComments();
    }
  }, [isAuthenticated]);

  // Filter comments based on search
  useEffect(() => {
    if (globalFilter.trim() === '') {
      setFilteredComments(comments);
    } else {
      const filtered = comments.filter(comment =>
        comment.name.toLowerCase().includes(globalFilter.toLowerCase()) ||
        comment.email.toLowerCase().includes(globalFilter.toLowerCase()) ||
        comment.body.toLowerCase().includes(globalFilter.toLowerCase())
      );
      setFilteredComments(filtered);
    }
  }, [globalFilter, comments]);

  const fetchComments = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/comments');
      const data = await response.json();
      setComments(data);
      setFilteredComments(data);
    } catch (error) {
      toast.current?.show({ 
        severity: 'error', 
        summary: 'Error', 
        detail: 'Failed to fetch comments', 
        life: 3000 
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteComment = (commentId) => {
    setComments(comments.filter(c => c.id !== commentId));
    toast.current?.show({ 
      severity: 'success', 
      summary: 'Deleted', 
      detail: 'Comment deleted successfully', 
      life: 3000 
    });
  };

  const handleCreateFormChange = (field, value) => {
    setCreateForm(prev => ({ ...prev, [field]: value }));
    setCreateErrors(prev => ({ ...prev, [field]: '' }));
  };

  const handleCreateComment = () => {
    const errors = validateCommentForm(createForm);
    setCreateErrors(errors);

    if (!errors.name && !errors.email && !errors.body) {
      const newComment = {
        id: comments.length + 1,
        postId: 1,
        name: createForm.name,
        email: createForm.email,
        body: createForm.body
      };
      
      setComments([newComment, ...comments]);
      setShowCreateDialog(false);
      setCreateForm({ name: '', email: '', body: '' });
      setCreateErrors({ name: '', email: '', body: '' });
      toast.current?.show({ 
        severity: 'success', 
        summary: 'Created', 
        detail: 'Comment created successfully', 
        life: 3000 
      });
    }
  };

  const handleCloseDialog = () => {
    setShowCreateDialog(false);
    setCreateForm({ name: '', email: '', body: '' });
    setCreateErrors({ name: '', email: '', body: '' });
  };

  const resetComments = () => {
    setComments([]);
    setFilteredComments([]);
    setGlobalFilter('');
  };

  return {
    comments: filteredComments,
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
    resetComments
  };
};