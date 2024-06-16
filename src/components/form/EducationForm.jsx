const EducationForm = () => {
  return (
    <>
      <div>
        <label htmlFor="subject">Studiengang</label>
        <input
          type="text"
          id="subject"
          name="subject"
          defaultValue="literature"
        ></input>
      </div>
      <div>
        <label htmlFor="university">Universität</label>
        <input
          type="text"
          id="university"
          name="university"
          defaultValue="University"
        ></input>
      </div>
      <div>
        <label htmlFor="location">Ort</label>
        <input
          type="text"
          id="location"
          name="location"
          defaultValue="Martin"
        ></input>
      </div>
      <p>
        <div>
          <label htmlFor="startDate">Beginn</label>
          <input type="text" id="startDate" name="startDate"></input>
        </div>
        <div>
          <label htmlFor="endDate">Ende</label>
          <input type="text" id="endDate" name="endDate"></input>
        </div>
      </p>
      <button type="submit">Submit</button>{" "}
    </>
  );
};

export default EducationForm;
