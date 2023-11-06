import { useRef, useEffect, useState } from "react";

function Dropdown() {
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
        Click me!
      </button>
      {dropdownState.open && (
        <div className="absolute z-50 bg-sky-500">
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown
