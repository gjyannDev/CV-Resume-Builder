import { GenInfoMenuItem } from "./InputDropDown";
import Menu from "./InputDropDown";
import GeneralInfoIcon from "../assets/icons/bxs-user.svg";

function GenInfoForm() {
  return (
    <div className="dropdown__items">
      <GenInfoMenuItem
        labelName={"Full Name"}
        inputType={"text"}
        inputId={"full__name-input"}
      />
      <GenInfoMenuItem
        labelName={"Email"}
        inputType={"email"}
        inputId={"email__input"}
      />
      <GenInfoMenuItem
        labelName={"Mobile Number"}
        inputType={"tel"}
        inputId={"tel__input"}
      />
      <GenInfoMenuItem
        labelName={"Job Title (Optional)"}
        inputType={"text"}
        inputId={"title__input"}
      />
      <GenInfoMenuItem
        labelName={"Address"}
        inputType={"text"}
        inputId={"address__input"}
      />
    </div>
  );
}

export default function GeneralInformation() {
  return (
    <>
      <Menu
        iconPath={GeneralInfoIcon}
        menuName={"General Information"}
        MenuData={GenInfoForm}
      />
    </>
  );
}
