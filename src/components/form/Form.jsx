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
  // const [visibilityList, setVisibilityList]

  const infoHandle = (e) => {
    infoHandler(e);
    setCreateMode(!createMode);
  };

  return (
    <section>
      <div>
        <button className="section" onClick={() => setDropped(!dropped)}>
          <h2>{content.title}</h2>
        </button>
      </div>

      {dropped ? (
        <div className="drop-menu">
          {singleInfo
            ? null
            : info.length !== 0 &&
              info.map((station) => (
                <p key={station.index}>
                  {station[content.displayEntry]}
                  <button
                    onClick={() => visibilityHandler(station.id, station.index)}
                  >
                    show/hide
                  </button>
                </p>
              ))}
          <form onSubmit={(e) => infoHandle(e)}>
            {singleInfo ? null : !createMode ? (
              <button onClick={() => setCreateMode(!createMode)}>
                {content.newPointText}
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
