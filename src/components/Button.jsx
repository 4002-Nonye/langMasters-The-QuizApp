import React from "react";

const Button = ({ children, className,onClick, disable }) => {
  return (
    <button className={className} onClick={onClick} disabled={disable}>
      {children}
    </button>
  );
};

export default Button;
