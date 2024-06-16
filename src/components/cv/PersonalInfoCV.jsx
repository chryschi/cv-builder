/* eslint-disable react/prop-types */

const PersonalInfoCV = ({ info, visible }) => {
  return visible ? (
    <section>
      <h3>Persönliche Daten</h3>
      <ul>
        <li>Geburtsdatum {info.birthday}</li>
        <li>Adresse {info.adress}</li>
        <li>Telefon {info.phone}</li>
        <li>Email {info.email}</li>
      </ul>
    </section>
  ) : (
    <></>
  );
};

export default PersonalInfoCV;
