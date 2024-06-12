/* eslint-disable react/prop-types */

import { useState } from "react";

const Projects = (props) => {
  const [dropped, setDropped] = useState(false);
  const [createProject, setCreateProject] = useState(false);

  return (
    <section>
      <div>
        <button onClick={() => setDropped(!dropped)}>
          <h2>Projekte</h2>
        </button>
      </div>

      {dropped ? (
        <>
          {props.info.length !== 0 &&
            props.info.map((station, idx) => (
              <p key={idx}>{station.project}</p>
            ))}
          <form
            onSubmit={(e) => {
              props.infoHandler(e);
              setCreateProject(!createProject);
            }}
          >
            {!createProject ? (
              <button onClick={() => setCreateProject(!createProject)}>
                Neues Projekt anlegen
              </button>
            ) : null}

            {createProject ? (
              <>
                <div>
                  <label>Projekt</label>
                  <input
                    type="text"
                    name="project"
                    defaultValue="Todo-App"
                  ></input>
                </div>
                <div>
                  <label>Verwendete Technologien</label>
                  <input
                    type="text"
                    name="technologies"
                    defaultValue="React, Javascript"
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
                <button type="submit">Submit</button>{" "}
              </>
            ) : null}
          </form>
        </>
      ) : null}
    </section>
  );
};

export default Projects;
