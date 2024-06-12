import "./App.css";
import PersonalInfo from "./components/form/personalInfo";
import { useState } from "react";
import Education from "./components/form/educationalExp";
import Career from "./components/form/practicalExp";
import Skill from "./components/form/skills";

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

        <section>
          <h3>Persönliche Daten</h3>
          <ul>
            <li>Geburtsdatum {personalInfo.birthday}</li>
            <li>Adresse {personalInfo.adress}</li>
            <li>Telefon {personalInfo.phone}</li>
            <li>Email {personalInfo.email}</li>
          </ul>
        </section>

        <section>
          <h3>Ausbildung</h3>

          {educationInfo.map((station, idx) => {
            return (
              <div className="education-point" key={idx}>
                <div>
                  <p>
                    {station.startDate}-{station.endDate}
                  </p>
                </div>
                <div>
                  <p>{`${station.university}(${station.location})`}</p>
                  <p>{station.subject}</p>
                </div>
              </div>
            );
          })}
        </section>
        <section>
          <h3>Karriere</h3>

          {careerInfo.map((station, idx) => {
            return (
              <div className="career-point" key={idx}>
                <div>
                  <p>
                    {station.startDate}-{station.endDate}
                  </p>
                </div>
                <div>
                  <p>{station.position}</p>
                  <p>{station.company}</p>
                  <p>{station.description}</p>
                </div>
              </div>
            );
          })}
        </section>
        <section>
          <h3>Kenntnisse und Interessen</h3>

          {skillInfo.map((station, idx) => {
            return (
              <div className="skill-point" key={idx}>
                <div>
                  <p>{station.skill}</p>
                </div>
                <div>
                  <p>{station.level}</p>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
}

export default App;
