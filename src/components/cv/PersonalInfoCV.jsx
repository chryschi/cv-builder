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

  return visible ? (
    <section className="left-col">
      <ul>
        <li>
          {info.date === "" ? null : <MaterialIcon iconCode={"cake"} />}
          {date}
        </li>
        <li>
          {info.adress === "" ? null : <MaterialIcon iconCode={"house"} />}
          {adress === undefined ? null : adress.length === 1 ? (
            <>{adress[0]}</>
          ) : (
            <>
              {adress[0]}, <br /> {adress[1]}
            </>
          )}
        </li>
        <li>
          {info.phone === "" ? null : <MaterialIcon iconCode={"call"} />}{" "}
          {info.phone}
        </li>
        <li>
          {info.email === "" ? null : <MaterialIcon iconCode={"mail"} />}{" "}
          {info.email}
        </li>
        <li>
          {info.website === "" ? null : <MaterialIcon iconCode={"language"} />}
          {info.website}
        </li>
      </ul>
    </section>
  ) : (
    <></>
  );
};

export default PersonalInfoCV;
