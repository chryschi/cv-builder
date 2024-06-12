import "./App.css";
import PersonalInfo from "./components/form/PersonalInfo";
import { useState } from "react";
import Education from "./components/form/EducationalExp";
import Career from "./components/form/PracticalExp";
import Skill from "./components/form/Skills";
import PersonalInfoCV from "./components/cv/PersonalInfoCV";
import CareerInfoCV from "./components/cv/CareerInfoCV";
import EducationInfoCV from "./components/cv/EducationInfoCV";
import SkillsCV from "./components/cv/SkillsCV";

function App() {
  const [personalInfo, setPersonalInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState([]);
  const [careerInfo, setCareerInfo] = useState([]);
  const [skillInfo, setSkillInfo] = useState([]);

  const updatePersonalInfo = (event) => {
    const newInfo = createInfoObject(event);
    setPersonalInfo(newInfo);
  };

  const updateEducation = (event) => {
    const newInfo = createInfoObject(event);
    const newEducationInfo = [...educationInfo];
    newEducationInfo.push(newInfo);
    setEducationInfo(newEducationInfo);
  };

  const updateCareer = (event) => {
    const newInfo = createInfoObject(event);
    const newCareerInfo = [...careerInfo];
    newCareerInfo.push(newInfo);
    setCareerInfo(newCareerInfo);
  };

  const updateSkill = (event) => {
    const newInfo = createInfoObject(event);
    const newSkillInfo = [...skillInfo];
    newSkillInfo.push(newInfo);
    setSkillInfo(newSkillInfo);
  };

  const createInfoObject = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newInfo = {};

    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
      newInfo[pair[0]] = pair[1];
    }
    return newInfo;
  };

  return (
    <>
      <div className="sidebar">
        <h1>Lebenslauf Generator</h1>
        <button>Generiere Lebenslauf</button>
        <div className="form">
          <PersonalInfo infoHandler={updatePersonalInfo} />
          <Education infoHandler={updateEducation} info={educationInfo} />
          <Career infoHandler={updateCareer} info={careerInfo} />
          <Skill infoHandler={updateSkill} info={skillInfo} />
        </div>
      </div>
      <div className="cv">
        <header>
          <h2>{personalInfo.fullName}</h2>
          <p>Lebenslauf</p>
        </header>
        <PersonalInfoCV info={personalInfo} />
        <EducationInfoCV info={educationInfo} />
        <CareerInfoCV info={careerInfo} />
        <SkillsCV info={skillInfo} />
      </div>
    </>
  );
}

export default App;
