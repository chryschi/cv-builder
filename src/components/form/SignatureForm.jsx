const SignatureForm = () => {
  return (
    <>
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
        <input
          type="date"
          id="date"
          name="date"
          defaultValue={"2000-01-19"}
        ></input>
      </div>
    </>
  );
};

export default SignatureForm;
