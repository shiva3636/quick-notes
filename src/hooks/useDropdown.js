import { useState, useRef, useEffect } from "react";

const useDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const dropdownRef = useRef(null);

  const openDropdown = (event) => {
    const { clientX, clientY } = event;
    setPosition({ top: clientY, left: clientX });
    setIsOpen(true);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };


  useEffect(() => {

    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown()
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);


  return { isOpen, position, dropdownRef, openDropdown };
};

export default useDropdown;
