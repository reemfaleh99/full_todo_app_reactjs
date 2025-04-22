import React from "react";

const SelectButton = ({ children, ...rest }) => {
  return (
    <select
      className="rounded-xl px-5 py-2 text-xl font-medium capitalize bg-gray-300 p-10 cursor-pointer"
      {...rest}
    >
      {children}
    </select>
  );
};

export default SelectButton;
