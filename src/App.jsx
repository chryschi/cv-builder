import "./App.css";
import { useState } from "react";
import Form from "./components/form/Form";
import PersonalInfoCV from "./components/cv/PersonalInfoCV";
import CareerInfoCV from "./components/cv/CareerInfoCV";
import EducationInfoCV from "./components/cv/EducationInfoCV";
import SkillsCV from "./components/cv/SkillsCV";
import ProjectsCV from "./components/cv/ProjectsCV";
import SignatureCV from "./components/cv/SignatureCV";
import SignatureForm from "./components/form/SignatureForm";
import PersonalInfoForm from "./components/form/PersonalInfoForm";
import "./components/cv/CVOwnDesign.css";
import "./components/cv/CVOtherFont.css";

function App() {
  const [personalInfo, setPersonalInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState([]);
  const [projectsInfo, setProjectsInfo] = useState([]);
  const [careerInfo, setCareerInfo] = useState([]);
  const [skillInfo, setSkillInfo] = useState([]);
  const [signatureInfo, setSignatureInfo] = useState({});
  const [sectionVisibility, setSectionVisibility] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
  ]);

  const infoList = [educationInfo, projectsInfo, careerInfo, skillInfo];
  const setInfoFnc = [
    setEducationInfo,
    setProjectsInfo,
    setCareerInfo,
    setSkillInfo,
  ];
  const tagList = ["subject", "project", "position", "skill"];

  const updateNoniterableInfo = (event) => {
    const setInfoFnc = [setPersonalInfo, setSignatureInfo];
    const tagList = ["fullName", "date"];

    const newInfo = createInfoObject(event);

    const id = tagList.findIndex((tag) => {
      return newInfo[tag] === undefined ? false : true;
    });
    setInfoFnc[id](newInfo);
  };

  const updateIterableInfo = (event) => {
    const newInfo = createInfoObject(event);

    const id = tagList.findIndex((tag) => {
      return newInfo[tag] === undefined ? false : true;
    });

    newInfo["index"] = setIndex(infoList[id]);
    newInfo["id"] = id;
    newInfo["visible"] = true;

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
    return newInfo;
  };

  const updateInfo = (event, id, index) => {
    const newInfo = createInfoObject(event);
    const copyInfo = [...infoList[id]];
    const bulletpointIndex = getBulletpointIndex(copyInfo, id, index);
    const bulletpoint = copyInfo[bulletpointIndex];
    for (const [key, value] of Object.entries(newInfo)) {
      console.log(key);
      console.log(value);
      if (copyInfo[`${key}`] !== value) {
        bulletpoint[`${key}`] = value;
      }
    }
    setInfoFnc[id](copyInfo);
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

  const deleteBulletpoint = (id, index) => {
    const copyInfo = [...infoList[id]];
    const newInfo = copyInfo.filter((station) => station.index !== index);
    setInfoFnc[id](newInfo);
  };

  const toggleSectionVisibility = (id) => {
    const visibilityArray = [...sectionVisibility];

    visibilityArray[id] = !visibilityArray[id];
    setSectionVisibility(visibilityArray);
  };

  return (
    <>
      <div className="sidebar">
        <header>
          <h1>Lebenslauf Generator</h1>
        </header>
        <main>
          <div className="forms-container">
            <Form
              infoHandler={updateNoniterableInfo}
              info={personalInfo}
              content={{
                title: "Persönliche Daten",
                newPointText: "",
                displayEntry: "",
                component: <PersonalInfoForm />,
                componentId: 5,
              }}
              singleInfo={true}
              sectionVisibilityHandler={toggleSectionVisibility}
            />

            <Form
              infoHandler={updateIterableInfo}
              info={educationInfo}
              visibilityHandler={toggleVisibility}
              content={{
                title: "Ausbildung",
                newPointText: "Neue Ausbildung anlegen",
                displayEntry: "subject",
                component: null,
                componentId: 0,
              }}
              singleInfo={false}
              deleteHandler={deleteBulletpoint}
              editHandler={updateInfo}
              sectionVisibilityHandler={toggleSectionVisibility}
            />
            <Form
              infoHandler={updateIterableInfo}
              info={careerInfo}
              visibilityHandler={toggleVisibility}
              content={{
                title: "Karriere",
                newPointText: "Neuen Karrierepunkt anlegen",
                displayEntry: "position",
                component: null,
                componentId: 2,
              }}
              singleInfo={false}
              deleteHandler={deleteBulletpoint}
              editHandler={updateInfo}
              sectionVisibilityHandler={toggleSectionVisibility}
            />
            <Form
              infoHandler={updateIterableInfo}
              info={projectsInfo}
              visibilityHandler={toggleVisibility}
              content={{
                title: "Projekte",
                newPointText: "Neues Projekt anlegen",
                displayEntry: "project",
                component: null,
                componentId: 1,
              }}
              singleInfo={false}
              deleteHandler={deleteBulletpoint}
              editHandler={updateInfo}
              sectionVisibilityHandler={toggleSectionVisibility}
            />

            <Form
              infoHandler={updateIterableInfo}
              info={skillInfo}
              visibilityHandler={toggleVisibility}
              content={{
                title: "Kenntnisse",
                newPointText: "Neue Fähigkeit anlegen",
                displayEntry: "skill",
                component: null,
                componentId: 3,
              }}
              singleInfo={false}
              deleteHandler={deleteBulletpoint}
              editHandler={updateInfo}
              sectionVisibilityHandler={toggleSectionVisibility}
            />
            <Form
              infoHandler={updateNoniterableInfo}
              info={signatureInfo}
              content={{
                title: "Unterschrift",
                newPointText: "",
                displayEntry: "",
                component: <SignatureForm />,
                componentId: 4,
              }}
              singleInfo={true}
              sectionVisibilityHandler={toggleSectionVisibility}
            />
          </div>
        </main>
      </div>
      <article className="cv">
        <header>
          <img className="photo"></img>
          <div className="title">
            <h1>{personalInfo.fullName}</h1>
            <p>Lebenslauf</p>
          </div>
        </header>
        <div className="cv-main">
          <PersonalInfoCV info={personalInfo} visible={sectionVisibility[5]} />
          <EducationInfoCV
            info={educationInfo}
            visible={sectionVisibility[0]}
          />
          <SkillsCV info={skillInfo} visible={sectionVisibility[3]} />
          <ProjectsCV info={projectsInfo} visible={sectionVisibility[1]} />
          <CareerInfoCV info={careerInfo} visible={sectionVisibility[2]} />
          <SignatureCV info={signatureInfo} visible={sectionVisibility[4]} />
        </div>
      </article>
    </>
  );
}

export default App;
