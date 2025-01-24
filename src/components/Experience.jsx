import { GenInfoMenuItem } from "./InputDropDown";
import Menu from "./InputDropDown";
import experienceIcon from "../assets/icons/bxs-briefcase.svg";
import { ActionButton } from "./Utilities";

function ItemInputs() {
  return (
    <div className="dropdown__items">
      <GenInfoMenuItem
        labelName={"Company Name"}
        inputType={"text"}
        inputId={"company__input"}
      />
      <GenInfoMenuItem
        labelName={"Position Title"}
        inputType={"text"}
        inputId={"position__input"}
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
      <GenInfoMenuItem
        labelName={"Location"}
        inputType={"text"}
        inputId={"location__input"}
      />
      <GenInfoMenuItem
        labelName={"Description"}
        inputType={"text"}
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