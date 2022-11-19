import React from "react";

export const Chip = ({ label, name, value, id, ...restProps }) => {
  return (
    <div className="chip">
      <input type="checkbox" name={name} id={id} {...restProps} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};