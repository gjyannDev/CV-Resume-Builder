import { Menu } from "./InputDropDown";
import InputItem from "./InputDropDown";
import GeneralInfoIcon from "../assets/icons/bxs-user.svg";

export default function GeneralInformation({
  handleGeneralInfoChange,
  fullName,
  email,
  mobileNum,
  portfolio,
  address,
  open,
  handleOpenClick,
}) {
  return (
    <>
      <Menu
        iconPath={GeneralInfoIcon}
        menuName={"General Information"}
        open={open}
        handleOpenClick={handleOpenClick}
      />

      {open && (
        <div className="menu__data-container container">
          <div className="dropdown__items">
            <InputItem
              labelName={"Full Name"}
              inputType={"text"}
              inputId={"full__name-input"}
              value={fullName}
              onChange={handleGeneralInfoChange}
              data-key="fullName"
            />
            <InputItem
              labelName={"Mobile Number"}
              inputType={"tel"}
              inputId={"tel__input"}
              value={mobileNum}
              onChange={handleGeneralInfoChange}
              data-key="mobileNum"
            />
            <InputItem
              labelName={"Email"}
              inputType={"email"}
              inputId={"email__input"}
              value={email}
              onChange={handleGeneralInfoChange}
              data-key="email"
            />
            <InputItem
              labelName={"Portfolio Link"}
              inputType={"text"}
              inputId={"portfolio__input"}
              value={portfolio}
              onChange={handleGeneralInfoChange}
              data-key="portfolio"
            />
            <InputItem
              labelName={"Address"}
              inputType={"text"}
              inputId={"address__input"}
              value={address}
              onChange={handleGeneralInfoChange}
              data-key="address"
            />
          </div>
        </div>
      )}
    </>
  );
}
