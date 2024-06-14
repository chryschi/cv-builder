/* eslint-disable react/prop-types */

import { useState } from "react";

const Signature = (props) => {
  const [dropped, setDropped] = useState(false);

  return (
    <section>
      <div>
        <button className="section" onClick={() => setDropped(!dropped)}>
          <h2>Unterschrift</h2>
        </button>
      </div>

      {dropped ? (
        <form onSubmit={props.infoHandler}>
          <div>
            <label htmlFor="location">Ort</label>
            <input
              type="text"
              id="location"
              name="location"
              defaultValue="Stockholm"
            ></input>
          </div>
          <div>
            <label htmlFor="date">Datum</label>
            <input type="date" id="date" name="date"></input>
          </div>

          <button type="submit">Submit</button>
        </form>
      ) : null}
    </section>
  );
};

export default Signature;
