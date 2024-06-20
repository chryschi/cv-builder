/* eslint-disable react/prop-types */

import MaterialIcon from "../MaterialIcon";

const PersonalInfoCV = ({ info, visible }) => {
  let adress;
  if (info.adress !== undefined) {
    adress = info.adress.split(",");
  }

  return visible ? (
    <section className="left-col">
      {/* <h2>Persönliche Daten</h2> */}
      <ul>
        <li>
          <MaterialIcon iconCode={"cake"} /> {info.birthday}
        </li>
        <li>
          <MaterialIcon iconCode={"house"} />{" "}
          {adress === undefined ? null : adress.length === 1 ? (
            <>{adress[0]}</>
          ) : (
            <>
              {adress[0]}, <br /> {adress[1]}
            </>
          )}
        </li>
        <li>
          <MaterialIcon iconCode={"call"} /> {info.phone}
        </li>
        <li>
          <MaterialIcon iconCode={"mail"} /> {info.email}
        </li>
      </ul>
    </section>
  ) : (
    <></>
  );
};

export default PersonalInfoCV;
