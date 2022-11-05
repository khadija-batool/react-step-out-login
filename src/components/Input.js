import React from "react";

const Input = ({ placeholder, type, name, className }) => {
  return (
    <div>
      <label for="fname">{placeholder}</label>
      <input
        className={className}
        type={type}
        id="fname"
        placeholder={placeholder}
        name={name}
      ></input>
    </div>
  );
};

export default Input;
