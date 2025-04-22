import React from "react";

const buttonType = {
  primary: {
    color: "text-white",
    bg: "bg-pink-500",
  },
  secondary: {
    color: "text-black",
    bg: "bg-gray-200",
  },
};

const Button = ({ children, variant, type }) => {
  const { color, bg } = buttonType[variant];
  return (
    <button
      className={`cursor-pointer rounded-xl px-5 py-2 text-xl font-medium capitalize ${color} ${bg}`}
      type={type === "submit" ? "submit" : "button"}
    >
      {children}
    </button>
  );
};

export default Button;
