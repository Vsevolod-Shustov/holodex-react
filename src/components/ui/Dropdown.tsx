import { useRef, useEffect, useState } from "react";

function Dropdown({ children, ...props }: any) {
  const container = useRef<any>();
  const [dropdownState, setDropdownState] = useState({ open: false });

  const handleDropdownClick = () =>
    setDropdownState({ open: !dropdownState.open });

  const handleClickOutside = (e: MouseEvent) => {
    if (container.current && !container.current.contains(e.target)) {
      setDropdownState({ open: false });
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={container}>
      <button
        type="button"
        className=""
        onClick={handleDropdownClick}
      >
        {props?.title}
      </button>
      {dropdownState.open && (
        <div className="absolute z-50">
          {children}
        </div>
      )}
    </div>
  );
}

export default Dropdown
