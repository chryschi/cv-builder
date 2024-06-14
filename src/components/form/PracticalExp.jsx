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
        <button className="section" onClick={() => setDropped(!dropped)}>
          <h2>Karriere</h2>
        </button>
      </div>

      {dropped ? (
        <div className="drop-menu">
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
                  <label htmlFor="position">Position</label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    defaultValue="Web Developer"
                  ></input>
                </div>
                <div>
                  <label htmlFor="company">Unternehmen</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    defaultValue="Web GmbH"
                  ></input>
                </div>
                <div>
                  <label htmlFor="description">Beschreibung</label>
                  <textarea
                    type="text"
                    id="description"
                    name="description"
                    defaultValue=""
                  ></textarea>
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
        </div>
      ) : null}
    </section>
  );
};

export default Career;
