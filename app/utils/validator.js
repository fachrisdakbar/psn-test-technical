export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateLoginForm = (form) => {
  const errors = { username: '', password: '' };
  
  if (!form.username.trim()) {
    errors.username = 'Field is required';
  }
  if (!form.password.trim()) {
    errors.password = 'Field is required';
  }
  
  return errors;
};

export const validateCommentForm = (form) => {
  const errors = { name: '', email: '', body: '' };
  
  if (!form.name.trim()) {
    errors.name = 'Field is required';
  }
  if (!form.email.trim()) {
    errors.email = 'Field is required';
  } else if (!validateEmail(form.email)) {
    errors.email = 'Invalid email format';
  }
  if (!form.body.trim()) {
    errors.body = 'Field is required';
  }
  
  return errors;
};