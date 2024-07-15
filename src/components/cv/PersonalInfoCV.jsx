/* eslint-disable react/prop-types */

import MaterialIcon from "../MaterialIcon";

const PersonalInfoCV = ({ info, visible }) => {
  let adress;
  if (info.adress !== undefined) {
    adress = info.adress.split(",");
  }

  const birthday = new Date(info.birthday);
  let date;

  if (info.birthday !== undefined) {
    date = new Intl.DateTimeFormat("de-DE").format(birthday);
  }

  // const date = new Date(info.birthday).toString();

  return visible ? (
    <section className="left-col">
      {/* <h2>Persönliche Daten</h2> */}
      <ul>
        <li>
          <MaterialIcon iconCode={"cake"} />
          {date}
        </li>
        <li>
          <MaterialIcon iconCode={"house"} />
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
        <li>
          <MaterialIcon iconCode={"language"} /> {info.website}
        </li>
      </ul>
    </section>
  ) : (
    <></>
  );
};

export default PersonalInfoCV;
