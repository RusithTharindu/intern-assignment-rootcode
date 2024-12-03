import React from 'react'

interface ButtonProps {
    children: React.ReactNode;
    onClickFunc: () => void;
    classes?: string;
}

const Button: React.FC<ButtonProps> = ({children, onClickFunc, classes}) => {
  return (
    <button
        className={`border border-black hover:border-black/50 bg-yellow-300 text-black hover:text-black/50 font-bold p-2 rounded-xl ${classes}`}
        onClick={onClickFunc}
    >{children}</button>
  )
}

export default Button