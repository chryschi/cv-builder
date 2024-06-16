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
        <input type="date" id="date" name="date"></input>
      </div>
    </>
  );
};

export default SignatureForm;
