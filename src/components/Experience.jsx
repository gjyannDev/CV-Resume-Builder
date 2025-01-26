import { InputItem } from "./InputDropDown";
import Menu from "./InputDropDown";
import experienceIcon from "../assets/icons/bxs-briefcase.svg";
import { ActionButton } from "./Utilities";

function ItemInputs() {
  return (
    <div className="dropdown__items">
      <InputItem
        labelName={"Company Name"}
        inputType={"text"}
        inputId={"company__input"}
      />
      <InputItem
        labelName={"Position Title"}
        inputType={"text"}
        inputId={"position__input"}
      />
      <InputItem
        labelName={"Start Date"}
        inputType={"date"}
        inputId={"start__date-input"}
      />
      <InputItem
        labelName={"End Date"}
        inputType={"date"}
        inputId={"end__date-input"}
      />
      <InputItem
        labelName={"Location"}
        inputType={"text"}
        inputId={"location__input"}
      />
      <InputItem
        labelName={"Description"}
        inputType={"textarea"}
        inputId={"description__input"}
      />
      <ActionButton />
    </div>
  );
}

export default function Experience() {

  return (
    <>
      <Menu
        iconPath={experienceIcon}
        menuName={"Work Experience"}
        MenuData={ItemInputs}
      />
    </>
  )
}