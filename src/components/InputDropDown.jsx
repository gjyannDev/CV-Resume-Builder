import chevronUpIcon from "../assets/icons/bx-chevron-up.svg";
import chevronDownIcon from "../assets/icons/bx-chevron-down.svg";

export default function InputItem({
  labelName,
  inputType,
  inputId,
  value,
  onChange,
  "data-key": dataKey,
}) {
  return (
    <div className="input__container">
      <div className="input__sub-container">
        <label className="label__text">{labelName}</label>
        {inputType === "textarea" ? (
          <textarea
            name=""
            id={inputId}
            value={value}
            onChange={onChange}
            data-key={dataKey}
          ></textarea>
        ) : (
          <input
            type={inputType}
            name=""
            id={inputId}
            value={value}
            onChange={onChange}
            data-key={dataKey}
          />
        )}
      </div>
    </div>
  );
}

export function Menu({ iconPath, menuName, open, handleOpenClick }) {
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
    </div>
  );
}
