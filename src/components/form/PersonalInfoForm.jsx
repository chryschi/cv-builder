/* eslint-disable react/prop-types */

const PersonalInfoForm = ({ info }) => {
  return (
    <>
      <div>
        <label htmlFor="fullName">Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          defaultValue={info.fullName}
        ></input>
      </div>
      <div>
        <label htmlFor="birthday">Geburtsdatum</label>
        <input
          type="date"
          id="birthday"
          name="birthday"
          defaultValue={info.birthday}
        ></input>
      </div>
      <div>
        <label htmlFor="adress">Adresse</label>
        <input
          type="text"
          id="adress"
          name="adress"
          defaultValue={info.adress}
        ></input>
      </div>
      <div>
        <label htmlFor="phone">Telefon</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          defaultValue={info.phone}
        ></input>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          defaultValue={info.email}
        ></input>
      </div>
      <div>
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          defaultValue={info.website}
        ></input>
      </div>
    </>
  );
};

export default PersonalInfoForm;
