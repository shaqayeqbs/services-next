import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 z-50 ${
        isOpen ? "" : "hidden"
      } flex items-center justify-center !z-40 bg-black bg-opacity-50 `}
    >
      <div className="bg-white p-6 rounded-lg mx-3">
        <span
          className="absolute top-2 right-2 text-gray-500 cursor-pointer"
          onClick={onClose}
        >
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
