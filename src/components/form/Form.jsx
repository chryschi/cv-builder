/* eslint-disable react/prop-types */

import { useState } from "react";

const Form = ({
  infoHandler,
  info,
  visibilityHandler,
  content,
  singleInfo,
}) => {
  const [dropped, setDropped] = useState(false);
  const [createMode, setCreateMode] = useState(false);

  const infoHandle = (e) => {
    infoHandler(e);
    setCreateMode(!createMode);
  };

  return (
    <section>
      <h2 className="drop-header">
        <button className="drop-button" onClick={() => setDropped(!dropped)}>
          <span className="material-symbols-outlined">
            {dropped ? "keyboard_arrow_down" : "keyboard_arrow_right"}
          </span>
          {content.title}
        </button>
        <button className="visibility">
          <span className="material-symbols-outlined">visibility</span>
        </button>
      </h2>

      {dropped ? (
        <div className="drop-menu">
          {singleInfo
            ? null
            : info.length !== 0 && (
                <div className="bulletpoint-container">
                  {info.map((station) => (
                    <p key={station.index}>
                      {station[content.displayEntry]}
                      <div className="buttons">
                        <button className="delete">
                          <span className="material-symbols-outlined">
                            delete_forever
                          </span>
                        </button>
                        <button className="edit">
                          <span className="material-symbols-outlined">
                            edit
                          </span>
                        </button>
                        <button
                          className="visibility"
                          onClick={() =>
                            visibilityHandler(station.id, station.index)
                          }
                        >
                          <span className="material-symbols-outlined">
                            {station.visible ? "visibility" : "visibility_off"}
                          </span>
                        </button>
                      </div>
                    </p>
                  ))}
                </div>
              )}
          <form onSubmit={(e) => infoHandle(e)}>
            {singleInfo ? null : !createMode ? (
              <button
                className="add-button"
                onClick={() => setCreateMode(!createMode)}
              >
                {content.newPointText}
                <span className="material-symbols-outlined">add</span>
              </button>
            ) : null}

            {singleInfo
              ? content.component
              : createMode
              ? content.component
              : null}
          </form>
        </div>
      ) : null}
    </section>
  );
};

export default Form;
