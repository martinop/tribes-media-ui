import React from 'react';
import PropTypes from 'prop-types';
import getIsLightColor from '../../utils/getIsLightColor';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ color, size, label, disabled, className, ...props }) => {
  const mode = `button--${color}`
  const isLightColor = getIsLightColor()
  return (
    <button
      type="button"
      className={['font-poppins button', isLightColor ? 'text-black' : 'text-white',  `button--${size}`, className && className, disabled ? 'disabled' : '', mode].join(' ')}
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
