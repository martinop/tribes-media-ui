import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

const Button = ({ color, size, label, disabled, onClick, className, ...props }) => {
  const mode = `button--${color}`
  return (
    <button
      type="button"
      disabled={disabled}
      className={['font-poppins button', `button--${size}`, className && className, disabled ? 'disabled' : '', mode].join(' ')}
      {...!disabled && onClick && { onClick }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: "secondary",
  size: 'medium',
  onClick: undefined,
};

export default Button;