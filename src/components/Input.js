import React from "react";

export function Input({ placeholder, type, name, className }) {
  return (
    <input
      className={className}
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
}