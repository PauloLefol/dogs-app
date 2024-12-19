import React from 'react';

const validation = {
  email: {
    regex:
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    message: 'Please enter a valid email address',
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/,
    message:
      'The password must contain at least 8 characters, being at least 1 uppercase, 1 lowercase and 1 digit.',
  },
  number: {
    regex: /^\d+$/,
    message: 'Use only numbers',
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState('');

  function validate(value) {
    if (type == false) return true;
    if (value.length == 0) {
      setError('Please fill out this field');
      return false;
    }
    if (validation[type] && !validation[type].regex.test(value)) {
      setError(validation[type].message);
      return false;
    }
    setError(null);
    return true;
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
