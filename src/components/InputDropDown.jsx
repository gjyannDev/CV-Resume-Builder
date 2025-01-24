import { useState } from "react";
import chevronUpIcon from "../assets/icons/bx-chevron-up.svg";
import chevronDownIcon from "../assets/icons/bx-chevron-down.svg";

export function GenInfoMenuItem({ labelName, inputType, inputId }) {
  return (
    <div className="gen__input-container">
      <div className="gen__input-sub">
        <label className="label__text">{labelName}</label>
        <input
          type={inputType}
          name=""
          id={inputId}
        />
      </div>
    </div>
  );
}

export default function Menu({ iconPath, menuName, MenuData }) {
  const [open, isOpen] = useState(false);

  function handleOpenClick() {
    isOpen(!open);
  }

  return (
    <div className="menu__container container">
      <div className={`menu__sub-container ${open && "menu__sub-container-2"}`}>
        <div className="menu__contents">
          <div className="menu__left-content">
            <img
              src={iconPath}
              className="menu__icon"
              alt="icon svg"
            />
            <h1>{menuName}</h1>
          </div>

          <div className="chevron__container">
            <img
              src={!open ? chevronUpIcon : chevronDownIcon}
              className="chevron__up"
              alt="chevron up"
              onClick={handleOpenClick}
            />
          </div>
        </div>
      </div>
      {open && (
        <div className="menu__data-container">
          <MenuData />
        </div>
      )}
    </div>
  );
}
