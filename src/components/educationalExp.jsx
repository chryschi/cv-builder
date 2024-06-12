/* eslint-disable react/prop-types */

import { useState } from "react";

const Education = (props) => {
  const [dropped, setDropped] = useState(false);
  const [createEducation, setCreateEducation] = useState(false);

  return (
    <section>
      <div>
        <button onClick={() => setDropped(!dropped)}>
          <h2>Ausbildung</h2>
        </button>
      </div>

      {dropped ? (
        <>
          {props.info.length !== 0 &&
            props.info.map((station, idx) => (
              <p key={idx}>{station.subject}</p>
            ))}
          <form
            onSubmit={(e) => {
              props.infoHandler(e);
              setCreateEducation(!createEducation);
            }}
          >
            {!createEducation ? (
              <button onClick={() => setCreateEducation(!createEducation)}>
                Neue Ausbildung anlegen
              </button>
            ) : null}

            {createEducation ? (
              <>
                <div>
                  <label>Studiengang</label>
                  <input
                    type="text"
                    name="subject"
                    defaultValue="literature"
                  ></input>
                </div>
                <div>
                  <label>Universität</label>
                  <input
                    type="text"
                    name="university"
                    defaultValue="University"
                  ></input>
                </div>
                <div>
                  <label>Ort</label>
                  <input
                    type="text"
                    name="location"
                    defaultValue="Martin"
                  ></input>
                </div>
                <div>
                  <div>
                    <label>Beginn</label>
                    <input type="text" name="startDate"></input>
                  </div>
                  <div>
                    <label>Ende</label>
                    <input type="text" name="endDate"></input>
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
