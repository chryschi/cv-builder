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
        <input type="date" id="birthday" name="birthday"></input>
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
        <input type="number" id="phone" name="phone"></input>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email"></input>
      </div>
    </>
  );
};

export default PersonalInfoForm;
