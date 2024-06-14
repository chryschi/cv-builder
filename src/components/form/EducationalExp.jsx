/* eslint-disable react/prop-types */

import { useState } from "react";

const Education = (props) => {
  const [dropped, setDropped] = useState(false);
  const [creatingEducation, setCreatingEducation] = useState(false);
  // const [visibilityList, setVisibilityList]

  const infoHandler = (e) => {
    props.infoHandler(e);
    setCreatingEducation(!creatingEducation);
  };

  return (
    <section>
      <div>
        <button className="section" onClick={() => setDropped(!dropped)}>
          <h2>Ausbildung</h2>
        </button>
      </div>

      {dropped ? (
        <>
          {props.info.length !== 0 &&
            props.info.map((station) => (
              <p key={station.index}>
                {station.subject}
                <button
                  onClick={() =>
                    props.visibilityHandler(station.id, station.index)
                  }
                >
                  show/hide
                </button>
              </p>
            ))}
          <form onSubmit={(e) => infoHandler(e)}>
            {!creatingEducation ? (
              <button onClick={() => setCreatingEducation(!creatingEducation)}>
                Neue Ausbildung anlegen
              </button>
            ) : null}

            {creatingEducation ? (
              <>
                <div>
                  <label htmlFor="subject">Studiengang</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    defaultValue="literature"
                  ></input>
                </div>
                <div>
                  <label htmlFor="university">Universität</label>
                  <input
                    type="text"
                    id="university"
                    name="university"
                    defaultValue="University"
                  ></input>
                </div>
                <div>
                  <label htmlFor="location">Ort</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    defaultValue="Martin"
                  ></input>
                </div>
                <div>
                  <div>
                    <label htmlFor="startDate">Beginn</label>
                    <input type="text" id="startDate" name="startDate"></input>
                  </div>
                  <div>
                    <label htmlFor="endDate">Ende</label>
                    <input type="text" id="endDate" name="endDate"></input>
                  </div>
                </div>
                <button type="submit">Submit</button>{" "}
              </>
            ) : null}
          </form>
        </>
      ) : null}
    </section>
  );
};

export default Education;
