/* eslint-disable react/prop-types */

import { useState } from "react";

const Career = (props) => {
  const [dropped, setDropped] = useState(false);
  const [creatingCareer, setCreatingCareer] = useState(false);

  const infoHandler = (e) => {
    props.infoHandler(e);
    setCreatingCareer(!creatingCareer);
  };

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
            props.info.map((station) => (
              <p key={station.index}>
                {station.position}
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
            {!creatingCareer ? (
              <button onClick={() => setCreatingCareer(!creatingCareer)}>
                Neuen Karrierepunkt anlegen
              </button>
            ) : null}

            {creatingCareer ? (
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
