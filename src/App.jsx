import "./App.css";
import PersonalInfo from "./components/form/PersonalInfo";
import { useState } from "react";
import Education from "./components/form/EducationalExp";
import Career from "./components/form/PracticalExp";
import Skills from "./components/form/Skills";
import PersonalInfoCV from "./components/cv/PersonalInfoCV";
import CareerInfoCV from "./components/cv/CareerInfoCV";
import EducationInfoCV from "./components/cv/EducationInfoCV";
import SkillsCV from "./components/cv/SkillsCV";
import Projects from "./components/form/Projects";
import ProjectsCV from "./components/cv/ProjectsCV";

function App() {
  const [personalInfo, setPersonalInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState([]);
  const [projectsInfo, setProjectsInfo] = useState([]);
  const [careerInfo, setCareerInfo] = useState([]);
  const [skillInfo, setSkillInfo] = useState([]);

  const updatePersonalInfo = (event) => {
    const newInfo = createInfoObject(event);
    delete newInfo.visible;
    setPersonalInfo(newInfo);
  };

  const updateEducation = (event) => {
    const newInfo = createInfoObject(event);
    newInfo["index"] =
      educationInfo.length === 0
        ? 1
        : educationInfo[educationInfo.length - 1].index + 1;

    newInfo["id"] = 0;

    const newEducationInfo = [...educationInfo];
    newEducationInfo.push(newInfo);
    setEducationInfo(newEducationInfo);
  };

  const updateCareer = (event) => {
    const newInfo = createInfoObject(event);
    newInfo["index"] =
      careerInfo.length === 0 ? 1 : careerInfo[careerInfo.length - 1].index + 1;
    newInfo["id"] = 1;

    const newCareerInfo = [...careerInfo];
    newCareerInfo.push(newInfo);
    setCareerInfo(newCareerInfo);
  };

  const updateProjects = (event) => {
    const newInfo = createInfoObject(event);
    newInfo["index"] =
      projectsInfo.length === 0
        ? 1
        : projectsInfo[projectsInfo.length - 1].index + 1;

    newInfo["id"] = 2;

    const newProjectsInfo = [...projectsInfo];
    newProjectsInfo.push(newInfo);
    setProjectsInfo(newProjectsInfo);
  };

  const updateSkills = (event) => {
    const newInfo = createInfoObject(event);
    newInfo["index"] =
      skillInfo.length === 0 ? 1 : skillInfo[skillInfo.length - 1].index + 1;
    newInfo["id"] = 3;

    const newSkillInfo = [...skillInfo];
    newSkillInfo.push(newInfo);
    setSkillInfo(newSkillInfo);
  };

  const createInfoObject = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newInfo = {};

    for (const pair of formData.entries()) {
      newInfo[pair[0]] = pair[1];
    }
    newInfo["visible"] = true;
    console.log(newInfo);
    return newInfo;
  };

  const toggleVisibility = (searchedId, searchedIndex) => {
    const infoList = [careerInfo, skillInfo, projectsInfo, educationInfo];
    const setInfoFnc = [
      setCareerInfo,
      setSkillInfo,
      setProjectsInfo,
      setEducationInfo,
    ];

    for (let i = 0; i < infoList.length; i++) {
      let desiredPointIdx = getBulletpointIndex(
        infoList[i],
        searchedId,
        searchedIndex
      );
      if (desiredPointIdx === -1) {
        continue;
      } else {
        updateVisibility(infoList[i], setInfoFnc[i], desiredPointIdx);
        break;
      }
    }
  };

  const getBulletpointIndex = (info, searchedId, searchedIndex) => {
    let desiredIdx = info.findIndex((station) => {
      if (station.id === searchedId && station.index === searchedIndex) {
        return true;
      }
      return false;
    });
    return desiredIdx;
  };

  const updateVisibility = (info, setInfoCallback, idx) => {
    const updatedInfo = [...info];
    console.log("updated Info");
    console.log(updatedInfo);

    const currentVisibility = updatedInfo[idx].visible;
    updatedInfo[idx].visible = !currentVisibility;
    setInfoCallback(updatedInfo);
  };

  return (
    <>
      <div className="sidebar">
        <h1>Lebenslauf Generator</h1>
        <button>Generiere Lebenslauf</button>
        <div className="form">
          <PersonalInfo infoHandler={updatePersonalInfo} />
          <Education
            infoHandler={updateEducation}
            info={educationInfo}
            visibilityHandler={toggleVisibility}
          />
          <Career
            infoHandler={updateCareer}
            info={careerInfo}
            visibilityHandler={toggleVisibility}
          />
          <Projects
            infoHandler={updateProjects}
            info={projectsInfo}
            visibilityHandler={toggleVisibility}
          />
          <Skills
            infoHandler={updateSkills}
            info={skillInfo}
            visibilityHandler={toggleVisibility}
          />
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
        <ProjectsCV info={projectsInfo} />
        <SkillsCV info={skillInfo} />
      </div>
    </>
  );
}

export default App;
