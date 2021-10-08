import React from 'react';

function Button({ title, ...props }) {
  return <button {...props}>{title}</button>;
}

Button.propTypes = {};

export default Button;
