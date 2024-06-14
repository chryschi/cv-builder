/* eslint-disable react/prop-types */

import { useState } from "react";

const PersonalInfo = (props) => {
  const [dropped, setDropped] = useState(false);

  return (
    <section>
      <div>
        <button className="section" onClick={() => setDropped(!dropped)}>
          <h2>Persönliche Daten</h2>
        </button>
      </div>

      {dropped ? (
        <form onSubmit={props.infoHandler}>
          <div>
            <label htmlFor="fullName">Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              defaultValue="Martin"
            ></input>
          </div>
          <div>
            <label htmlFor="birthday">Geburtsdatum</label>
            <input type="date" id="birthday" name="birthday"></input>
          </div>
          <div>
            <label htmlFor="adress">Adresse</label>
            <input
              type="text"
              id="adress"
              name="adress"
              defaultValue="London"
            ></input>
          </div>
          <div>
            <label htmlFor="phone">Telefon</label>
            <input type="number" id="phone" name="phone"></input>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email"></input>
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : null}
    </section>
  );
};

export default PersonalInfo;
