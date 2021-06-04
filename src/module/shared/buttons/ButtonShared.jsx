import React from 'react'
import classes from './ButtonShared-module.css'

const ButtonShared = ({children, className, onClick}) => {
  const extendsClass = className + " tw-h-8 tw-rounded-md tw-transition-colors hover:tw-bg-green-100 tw-text-blue-500 tw-border-blue-400 tw-border-2 tw-outline-none tw-border-solid"

  return ( <button onClick={onClick} className={extendsClass}>
    {children}
  </button> );
}
 
export default ButtonShared;