/* eslint-disable react/prop-types */

import { useState } from "react";

const PersonalInfo = (props) => {
  const [dropped, setDropped] = useState(false);

  return (
    <>
      <div>
        <button onClick={() => setDropped(!dropped)}>Persönliche Daten</button>
      </div>

      {dropped ? (
        <form onSubmit={props.updateInfo}>
          <div>
            <label>Name</label>
            <input type="text" name="fullName" defaultValue="Martin"></input>
          </div>
          <div>
            <label>Geburtsdatum</label>
            <input type="date" name="birthday"></input>
          </div>
          <div>
            <label>Adresse</label>
            <input type="text" name="adress" defaultValue="London"></input>
          </div>
          <div>
            <label>Telefon</label>
            <input type="number" name="phone"></input>
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="email"></input>
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : null}
    </>
  );
};

export default PersonalInfo;
