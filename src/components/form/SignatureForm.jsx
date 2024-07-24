/* eslint-disable react/prop-types */

const SignatureForm = ({ info }) => {
  return (
    <>
      <div>
        <label htmlFor="location">Ort</label>
        <input
          type="text"
          id="location"
          name="location"
          defaultValue={info.location}
        ></input>
      </div>
      <div>
        <label htmlFor="date">Datum</label>
        <input
          type="date"
          id="date"
          name="date"
          defaultValue={info.date}
        ></input>
      </div>
    </>
  );
};

export default SignatureForm;
