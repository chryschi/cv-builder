/* eslint-disable react/prop-types */

const EducationForm = ({ editInfo, editMode }) => {
  return (
    <>
      <div>
        <label htmlFor="subject">Studiengang</label>
        <input
          type="text"
          id="subject"
          name="subject"
          defaultValue={editMode ? editInfo.subject : "literature"}
        ></input>
      </div>
      <div>
        <label htmlFor="university">Universität</label>
        <input
          type="text"
          id="university"
          name="university"
          defaultValue={editMode ? editInfo.university : "University"}
        ></input>
      </div>
      <div>
        <label htmlFor="location">Ort</label>
        <input
          type="text"
          id="location"
          name="location"
          defaultValue={editMode ? editInfo.location : "Martin"}
        ></input>
      </div>
      <fieldset>
        <div>
          <label htmlFor="startDate">Beginn</label>
          <input
            type="text"
            id="startDate"
            name="startDate"
            defaultValue={editMode ? editInfo.startDate : ""}
          ></input>
        </div>
        <div>
          <label htmlFor="endDate">Ende</label>
          <input
            type="text"
            id="endDate"
            name="endDate"
            defaultValue={editMode ? editInfo.endDate : ""}
          ></input>
        </div>
      </fieldset>
    </>
  );
};

export default EducationForm;
