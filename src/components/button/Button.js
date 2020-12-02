import React from 'react';
import PropTypes from 'prop-types';
import getIsLightColor from '../../utils/getIsLightColor';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, disabled, className, ...props }) => {
  const mode = primary ? 'button--primary' : 'button--secondary';
  const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary');
  const isLightColor = getIsLightColor(primaryColor)
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
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: false,
  size: 'medium',
  onClick: undefined,
};
