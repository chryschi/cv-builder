/* eslint-disable react/prop-types */

import MaterialIcon from "../MaterialIcon";

const PersonalInfoCV = ({ info, visible }) => {
  return visible ? (
    <section>
      {/* <h3>Persönliche Daten</h3> */}
      <ul>
        <li>
          <MaterialIcon iconCode={"cake"} /> {info.birthday}
        </li>
        <li>
          <MaterialIcon iconCode={"house"} /> {info.adress}
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
