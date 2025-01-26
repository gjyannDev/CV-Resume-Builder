import Header from "./components/Header";
import GeneralInformation from "./components/GeneralInfo";
// import Education from "./components/Education";
// import Experience from "./components/Experience";
import { useState } from "react";
import data from "./components/Data";
import ResumeForm from "./components/ResumeForm";

function App() {
  const [generalInfo, setGeneralInfo] = useState(data.generalInfoData);
  const [educationInfo, setEducationInfo] = useState(data.educationData);
  const [experienceInfo, setExperienceInfo] = useState(data.experienceData);
  const [open, isOpen] = useState(false);

  function handleGeneralInfoChange(e) {
    const { key } = e.target.dataset;
    setGeneralInfo({ ...generalInfo, [key]: e.target.value });

    console.log(e.target.dataset);
  }

  function handleOpenClick() {
    isOpen(!open);
  }

  return (
    <div className="main__container">
      <Header />
      <main className="main__contents">
        <section className="input__form-container">
          <GeneralInformation
            handleGeneralInfoChange={handleGeneralInfoChange}
            fullName={generalInfo.fullName}
            email={generalInfo.email}
            mobileNum={generalInfo.mobileNum}
            jobTitle={generalInfo.jobTitle}
            address={generalInfo.address}
            open={open}
            handleOpenClick={handleOpenClick}
          />
        </section>
        <section className="resume__container">
          <ResumeForm generalInfo={generalInfo} />
        </section>
      </main>
    </div>
  );
}

export default App;
