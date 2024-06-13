/* eslint-disable react/prop-types */

import { useState } from "react";

const Projects = (props) => {
  const [dropped, setDropped] = useState(false);
  const [creatingProject, setCreatingProject] = useState(false);

  const infoHandler = (e) => {
    props.infoHandler(e);
    setCreatingProject(!creatingProject);
  };

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
            props.info.map((station) => (
              <p key={station.index}>
                {station.project}
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
            {!creatingProject ? (
              <button onClick={() => setCreatingProject(!creatingProject)}>
                Neues Projekt anlegen
              </button>
            ) : null}

            {creatingProject ? (
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
