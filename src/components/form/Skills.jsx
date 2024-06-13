/* eslint-disable react/prop-types */

import { useState } from "react";

const Skills = (props) => {
  const [dropped, setDropped] = useState(false);
  const [creatingSkill, setCreatingSkill] = useState(false);

  const infoHandler = (e) => {
    props.infoHandler(e);
    setCreatingSkill(!creatingSkill);
  };

  return (
    <section>
      <div>
        <button onClick={() => setDropped(!dropped)}>
          <h2>Kenntnisse</h2>
        </button>
      </div>

      {dropped ? (
        <>
          {props.info.length !== 0 &&
            props.info.map((station) => (
              <p key={station.index}>
                {station.skill}
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
            {!creatingSkill ? (
              <button onClick={() => setCreatingSkill(!creatingSkill)}>
                Neue Fähigkeit anlegen
              </button>
            ) : null}

            {creatingSkill ? (
              <>
                <div>
                  <label>Fähigkeit</label>
                  <input
                    type="text"
                    name="skill"
                    defaultValue="Englisch"
                  ></input>
                </div>
                <div>
                  <label>Niveau</label>
                  <input
                    type="text"
                    name="level"
                    defaultValue="fließend"
                  ></input>
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

export default Skills;
