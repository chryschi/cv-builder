/* eslint-disable react/prop-types */

import { useState } from "react";

const Career = (props) => {
  const [dropped, setDropped] = useState(false);
  const [createCareer, setCreateCareer] = useState(false);

  return (
    <section>
      <div>
        <button onClick={() => setDropped(!dropped)}>
          <h2>Karriere</h2>
        </button>
      </div>

      {dropped ? (
        <>
          {props.info.length !== 0 &&
            props.info.map((station, idx) => (
              <p key={idx}>{station.position}</p>
            ))}
          <form
            onSubmit={(e) => {
              props.infoHandler(e);
              setCreateCareer(!createCareer);
            }}
          >
            {!createCareer ? (
              <button onClick={() => setCreateCareer(!createCareer)}>
                Neuen Karrierepunkt anlegen
              </button>
            ) : null}

            {createCareer ? (
              <>
                <div>
                  <label>Position</label>
                  <input
                    type="text"
                    name="position"
                    defaultValue="Web Developer"
                  ></input>
                </div>
                <div>
                  <label>Unternehmen</label>
                  <input
                    type="text"
                    name="company"
                    defaultValue="Web GmbH"
                  ></input>
                </div>
                <div>
                  <label>Beschreibung</label>
                  <textarea
                    type="text"
                    name="description"
                    defaultValue=""
                  ></textarea>
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

export default Career;
