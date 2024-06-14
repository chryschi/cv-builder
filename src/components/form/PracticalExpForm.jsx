const PracticalExpForm = () => {
  return (
    <>
      <div>
        <label htmlFor="position">Position</label>
        <input
          type="text"
          id="position"
          name="position"
          defaultValue="Web Developer"
        ></input>
      </div>
      <div>
        <label htmlFor="company">Unternehmen</label>
        <input
          type="text"
          id="company"
          name="company"
          defaultValue="Web GmbH"
        ></input>
      </div>
      <div>
        <label htmlFor="description">Beschreibung</label>
        <textarea
          type="text"
          id="description"
          name="description"
          defaultValue=""
        ></textarea>
      </div>
      <div>
        <div>
          <label htmlFor="startDate">Beginn</label>
          <input type="text" id="startDate" name="startDate"></input>
        </div>
        <div>
          <label htmlFor="endDate">Ende</label>
          <input type="text" id="endDate" name="endDate"></input>
        </div>
      </div>
      <button type="submit">Submit</button>{" "}
    </>
  );
};

export default PracticalExpForm;
