import "./App.css";
import PersonalInfo from "./components/personalInfo";
import { useState } from "react";
import Education from "./components/educationalExp";

function App() {
  const [personalInfo, setPersonalInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState([]);

  const updatePersonalInfo = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newInfo = {};

    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
      newInfo[pair[0]] = pair[1];
    }
    setPersonalInfo(newInfo);
  };

  const updateEducation = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newInfo = {};

    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
      newInfo[pair[0]] = pair[1];
    }
    const newEducationInfo = [...educationInfo];
    newEducationInfo.push(newInfo);
    setEducationInfo(newEducationInfo);
  };

  return (
    <>
      <div className="sidebar">
        <h1>Lebenslauf Generator</h1>
        <button>Generiere Lebenslauf</button>
        <div className="form">
          <PersonalInfo infoHandler={updatePersonalInfo} />
          <Education infoHandler={updateEducation} info={educationInfo} />
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
      </div>
    </>
  );
}

export default App;
