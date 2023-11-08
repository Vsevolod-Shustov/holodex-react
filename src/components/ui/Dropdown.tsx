import { useRef, useEffect, useState } from "react";

function Dropdown({ children, ...props }: any) {
  const container = useRef<any>();
  const [dropdownState, setDropdownState] = useState({ open: false });

  const handleDropdownButtonClick = () => {
    setDropdownState({ open: !dropdownState.open })
  };

  const handleDropdownChildrenClick = () => {
    if (props.closeOnInsideClick === true) {
      setDropdownState({ open: false });
    }
  }

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
        onClick={handleDropdownButtonClick}
      >
        {props?.title || "Click me"}
      </button>
      <span className={`ml-1 text-xl leading-6 inline-block transition-transform duration-300 ${dropdownState.open ? 'rotate-180' : ''}`}>{`\u25BE`}</span>
      {dropdownState.open && (
        <div className="absolute z-50" onClick={handleDropdownChildrenClick}>
          {children}
        </div>
      )}
    </div>
  );
}

export default Dropdown
