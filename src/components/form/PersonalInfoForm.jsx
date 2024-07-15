const PersonalInfoForm = () => {
  return (
    <>
      <div>
        <label htmlFor="fullName">Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          defaultValue="Martin"
        ></input>
      </div>
      <div>
        <label htmlFor="birthday">Geburtsdatum</label>
        <input
          type="date"
          id="birthday"
          name="birthday"
          defaultValue={"2000-01-19"}
        ></input>
      </div>
      <div>
        <label htmlFor="adress">Adresse</label>
        <input
          type="text"
          id="adress"
          name="adress"
          defaultValue="London"
        ></input>
      </div>
      <div>
        <label htmlFor="phone">Telefon</label>
        <input type="tel" id="phone" name="phone"></input>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email"></input>
      </div>
      <div>
        <label htmlFor="website">Website</label>
        <input type="url" id="website" name="website"></input>
      </div>
    </>
  );
};

export default PersonalInfoForm;
