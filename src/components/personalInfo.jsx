import { useState } from "react";

const PersonalInfo = () => {
  const [dropped, setDropped] = useState(false);

  return (
    <>
      <div>
        <button onClick={() => setDropped(!dropped)}>Persönliche Daten</button>
      </div>

      {dropped ? (
        <form action="">
          <div>
            <label>Name</label>
            <input type="text"></input>
          </div>
          <div>
            <label>Geburtsdatum</label>
            <input type="date"></input>
          </div>
          <div>
            <label>Adresse</label>
            <input type="text"></input>
          </div>
          <div>
            <label>Telefon</label>
            <input type="number"></input>
          </div>
          <div>
            <label>Email</label>
            <input type="email"></input>
          </div>
        </form>
      ) : null}
    </>
  );
};

export default PersonalInfo;
