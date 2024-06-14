import "./App.css";
import { useState } from "react";
import Form from "./components/form/Form";
import PersonalInfoCV from "./components/cv/PersonalInfoCV";
import CareerInfoCV from "./components/cv/CareerInfoCV";
import EducationInfoCV from "./components/cv/EducationInfoCV";
import SkillsCV from "./components/cv/SkillsCV";
import ProjectsCV from "./components/cv/ProjectsCV";
import SignatureCV from "./components/cv/SignatureCV";
import EducationForm from "./components/form/EducationForm";
import PracticalExpForm from "./components/form/PracticalExpForm";
import ProjectsForm from "./components/form/ProjectsForm";
import SkillsForm from "./components/form/SkillsForm";
import SignatureForm from "./components/form/SignatureForm";
import PersonalInfoForm from "./components/form/PersonalInfoForm";

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
            <Form
              infoHandler={updateNoniterableInfo}
              info={personalInfo}
              content={{
                title: "Persönliche Daten",
                newPointText: "",
                displayEntry: "",
                component: <PersonalInfoForm />,
              }}
              singleInfo={true}
            />

            <Form
              infoHandler={updateIterableInfo}
              info={educationInfo}
              visibilityHandler={toggleVisibility}
              content={{
                title: "Ausbildung",
                newPointText: "Neue Ausbildung anlegen",
                displayEntry: "subject",
                component: <EducationForm />,
              }}
              singleInfo={false}
            />
            <Form
              infoHandler={updateIterableInfo}
              info={careerInfo}
              visibilityHandler={toggleVisibility}
              content={{
                title: "Karriere",
                newPointText: "Neuen Karrierepunkt anlegen",
                displayEntry: "position",
                component: <PracticalExpForm />,
              }}
              singleInfo={false}
            />
            <Form
              infoHandler={updateIterableInfo}
              info={projectsInfo}
              visibilityHandler={toggleVisibility}
              content={{
                title: "Projekte",
                newPointText: "Neues Projekt anlegen",
                displayEntry: "project",
                component: <ProjectsForm />,
              }}
              singleInfo={false}
            />

            <Form
              infoHandler={updateIterableInfo}
              info={skillInfo}
              visibilityHandler={toggleVisibility}
              content={{
                title: "Kenntnisse",
                newPointText: "Neue Fähigkeit anlegen",
                displayEntry: "skill",
                component: <SkillsForm />,
              }}
              singleInfo={false}
            />
            <Form
              infoHandler={updateNoniterableInfo}
              info={signatureInfo}
              content={{
                title: "Unterschrift",
                newPointText: "",
                displayEntry: "",
                component: <SignatureForm />,
              }}
              singleInfo={true}
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
