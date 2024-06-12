/* eslint-disable react/prop-types */

const PersonalInfoCV = (props) => {
  return (
    <section>
      <h3>Persönliche Daten</h3>
      <ul>
        <li>Geburtsdatum {props.info.birthday}</li>
        <li>Adresse {props.info.adress}</li>
        <li>Telefon {props.info.phone}</li>
        <li>Email {props.info.email}</li>
      </ul>
    </section>
  );
};

export default PersonalInfoCV;
