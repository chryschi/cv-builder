/* eslint-disable react/prop-types */

import { useState } from "react";

const Skills = (props) => {
  const [dropped, setDropped] = useState(false);
  const [createSkill, setCreateSkill] = useState(false);

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
            props.info.map((station, idx) => <p key={idx}>{station.skill}</p>)}
          <form
            onSubmit={(e) => {
              props.infoHandler(e);
              setCreateSkill(!createSkill);
            }}
          >
            {!createSkill ? (
              <button onClick={() => setCreateSkill(!createSkill)}>
                Neue Fähigkeit anlegen
              </button>
            ) : null}

            {createSkill ? (
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
