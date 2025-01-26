import GeneralInfoDetails from "./GeneralInfoDetails"

export default function ResumeForm({generalInfo}) {
  return (
    <div className="resume__sub-container">
      <div className="general__info-details">
        <GeneralInfoDetails generalInfo={generalInfo}/>
      </div>
    </div>
  )
}