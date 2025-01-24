import { GenInfoMenuItem } from "./InputDropDown";
import Menu from "./InputDropDown";
import educationIcon from "../assets/icons/bxs-graduation.svg";
import { ActionButton } from "./Utilities";

function ItemInputs() {
  return (
    <div className="dropdown__items">
      <GenInfoMenuItem
        labelName={"School"}
        inputType={"text"}
        inputId={"school__input"}
      />
      <GenInfoMenuItem
        labelName={"Course"}
        inputType={"text"}
        inputId={"course__input"}
      />
      <GenInfoMenuItem
        labelName={"Address"}
        inputType={"text"}
        inputId={"education__address-input"}
      />
      <GenInfoMenuItem
        labelName={"Start Date"}
        inputType={"date"}
        inputId={"start__date-input"}
      />
      <GenInfoMenuItem
        labelName={"End Date"}
        inputType={"date"}
        inputId={"end__date-input"}
      />
      <ActionButton />
    </div>
  );
}

export default function Education() {

  return (
    <>
      <Menu
        iconPath={educationIcon}
        menuName={"Education"}
        MenuData={ItemInputs}
      />
    </>
  )
}