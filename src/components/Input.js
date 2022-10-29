import React from 'react'

const Input = ({placeholder, type, name}) => {
  return (
    <div>
            <label for="fname">{placeholder}</label>
    <input type={type} id="fname" placeholder={placeholder} name={name}></input>
    </div>
  )
}

export default Input