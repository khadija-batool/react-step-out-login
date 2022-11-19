import React from "react";

export function Button({ variant, children, className, ...restProps }) {
  return (
    <button
      {...restProps}
      className={
        variant === "outlined"
          ? `${className} outlined-button`
          : `${className} contained-button`
      }
    >
      {children}
    </button>
  );
}