import React from "react";

const InputComponent = ({
  label,
  placeholder,
  onChange,
  value,
  type,
}) => {
  return (
    <div className="relative">
      <p className="absolute -mt-3 ml-2 text-sm font-medium text-gray-900 bg-white px-2">
        {label}
      </p>
      <input
        type={type || "text"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-black text-gray-900"
      />
    </div>
  );
};

export default InputComponent;
