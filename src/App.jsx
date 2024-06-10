import "./App.css";
import PersonalInfo from "./components/personalInfo";
import { useState } from "react";

function App() {
  const [personalInfo, setPersonalInfo] = useState({});

  const updateInfo = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const personalInfo = {};
    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
      personalInfo[pair[0]] = pair[1];
    }
    setPersonalInfo(personalInfo);
  };

  return (
    <>
      <div className="sidebar">
        <h1>Lebenslauf Generator</h1>
        <button>Generiere Lebenslauf</button>
        <div className="form">
          <section>
            <PersonalInfo updateInfo={updateInfo}></PersonalInfo>
          </section>
        </div>
      </div>
      <div className="cv">
        <p>Name {personalInfo.fullName}</p>
        <p>Geburtsdatum {personalInfo.birthday}</p>
        <p>Adresse {personalInfo.adress}</p>
        <p>Telefon {personalInfo.phone}</p>
        <p>Email {personalInfo.email}</p>
      </div>
    </>
  );
}

export default App;
