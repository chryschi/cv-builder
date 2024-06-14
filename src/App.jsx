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
import Signature from "./components/form/Signature";
import SignatureCV from "./components/cv/SignatureCV";

function App() {
  const [personalInfo, setPersonalInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState([]);
  const [projectsInfo, setProjectsInfo] = useState([]);
  const [careerInfo, setCareerInfo] = useState([]);
  const [skillInfo, setSkillInfo] = useState([]);
  const [signatureInfo, setSignatureInfo] = useState({});

  const updateNoniterableInfo = (event) => {
    const setInfoFnc = [setPersonalInfo, setSignatureInfo];
    const tagList = ["fullName", "date"];

    const newInfo = createInfoObject(event);
    delete newInfo.visible;
    const id = tagList.findIndex((tag) => {
      return newInfo[tag] === undefined ? false : true;
    });
    setInfoFnc[id](newInfo);
  };

  const updateIterableInfo = (event) => {
    const infoList = [
      educationInfo,
      projectsInfo,
      careerInfo,
      skillInfo,
      signatureInfo,
    ];
    const setInfoFnc = [
      setEducationInfo,
      setProjectsInfo,
      setCareerInfo,
      setSkillInfo,
      setSignatureInfo,
    ];
    const tagList = ["subject", "project", "position", "skill", "date"];
    const newInfo = createInfoObject(event);

    const id = tagList.findIndex((tag) => {
      return newInfo[tag] === undefined ? false : true;
    });

    newInfo["index"] = setIndex(infoList[id]);
    newInfo["id"] = id;

    const targetInfo = [...infoList[id]];
    targetInfo.push(newInfo);
    setInfoFnc[id](targetInfo);
  };

  const setIndex = (info) => {
    const index = info.length === 0 ? 1 : info[info.length - 1].index + 1;
    return index;
  };

  const createInfoObject = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newInfo = {};

    for (const pair of formData.entries()) {
      newInfo[pair[0]] = pair[1];
    }
    newInfo["visible"] = true;
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
    const currentVisibility = updatedInfo[idx].visible;
    updatedInfo[idx].visible = !currentVisibility;
    setInfoCallback(updatedInfo);
  };

  return (
    <>
      <div className="sidebar">
        <header>
          <h1>Lebenslauf Generator</h1>
        </header>
        <main>
          <div className="form">
            <PersonalInfo infoHandler={updateNoniterableInfo} />
            <Education
              infoHandler={updateIterableInfo}
              info={educationInfo}
              visibilityHandler={toggleVisibility}
            />
            <Career
              infoHandler={updateIterableInfo}
              info={careerInfo}
              visibilityHandler={toggleVisibility}
            />
            <Projects
              infoHandler={updateIterableInfo}
              info={projectsInfo}
              visibilityHandler={toggleVisibility}
            />
            <Skills
              infoHandler={updateIterableInfo}
              info={skillInfo}
              visibilityHandler={toggleVisibility}
            />
            <Signature
              infoHandler={updateNoniterableInfo}
              info={signatureInfo}
              visibilityHandler={toggleVisibility}
            />
          </div>
        </main>
      </div>
      <article className="cv">
        <header>
          <h2>{personalInfo.fullName}</h2>
          <p>Lebenslauf</p>
        </header>
        <PersonalInfoCV info={personalInfo} />
        <EducationInfoCV info={educationInfo} />
        <CareerInfoCV info={careerInfo} />
        <ProjectsCV info={projectsInfo} />
        <SkillsCV info={skillInfo} />
        <SignatureCV info={signatureInfo} />
      </article>
    </>
  );
}

export default App;
