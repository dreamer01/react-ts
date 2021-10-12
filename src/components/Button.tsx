import * as React from 'react';

type ButtonProps = {
  className: string;
  style?: React.CSSProperties;
  title?: string;
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
}

function Button({ title="Click Me", onClick, className}: ButtonProps) {
  return <button className={className} onClick={onClick}>{title}</button>;
}


export default Button;
