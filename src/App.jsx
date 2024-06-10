import "./App.css";
import PersonalInfo from "./components/personalInfo";

function App() {
  return (
    <>
      <div className="sidebar">
        <h1>Lebenslauf Generator</h1>
        <button>Generiere Lebenslauf</button>
        <div className="form">
          <section>
            <PersonalInfo></PersonalInfo>
          </section>
        </div>
      </div>
      <div className="cv">
        <p>Name</p>
        <p>Geburtsdatum</p>
        <p>Adresse</p>
        <p>Telefon</p>
        <p>Email</p>
      </div>
    </>
  );
}

export default App;
