import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({ Options, Selected, onSelectedChange, Label }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const OnBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", OnBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", OnBodyClick, {
        capture: true,
      });
    };
  }, []);

  const RenderedList = Options.map((option) => {
    if (Selected === option) {
      return null;
    }
    return (
      <div
        onClick={() => onSelectedChange(option)}
        key={option.value}
        className="item"
      >
        {option.label}
      </div>
    );
  });
  return (
    <div ref={ref} className="ui form">
      <div onClick={() => setOpen(!open)} className="field">
        <label>{Label}</label>
        <div
          className={`ui selection dropdown ${
            open === true ? "visible active" : ""
          }`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{Selected.label}</div>
          <div className={`menu ${open === true ? "visible transition" : ""}`}>
            {RenderedList}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dropdown;
