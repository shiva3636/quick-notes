import React from 'react';

const Dropdown = ({
  options = [],
  position = { top: 0, left: 0 },
  dropdownRef
}) => {
  return (

    <div ref={dropdownRef} style={{ top: position.top + 14, left: position.left - 124 }}
      className="absolute z-10 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg">
      <div style={{ left: "7.2rem" }} 
      className="absolute -top-2 left-4 w-3 h-3 bg-white rotate-45 border-l border-t border-gray-200"></div>
      {/* Menu Items */}
      <div className="py-2">
        {options.map((option, index) => (
          <li
            key={index}
            onClick={(e) => {
              option.onClick(e);
              // setIsOpen(false);
            }}
            className="block px-4 py-2 cursor-pointer"
          >
            {option.label}
          </li>
        ))}
      </div>
    </div>

  );
};

export default Dropdown; 