/* eslint-disable react/prop-types */

const PracticalExpForm = ({ editInfo, editMode }) => {
  return (
    <>
      <div>
        <label htmlFor="position">Position</label>
        <input
          type="text"
          id="position"
          name="position"
          defaultValue={editMode ? editInfo.position : "Web Developer"}
        ></input>
      </div>
      <div>
        <label htmlFor="company">Unternehmen</label>
        <input
          type="text"
          id="company"
          name="company"
          defaultValue={editMode ? editInfo.company : "Web GmbH"}
        ></input>
      </div>
      <div>
        <label htmlFor="description">Beschreibung</label>
        <textarea
          type="text"
          id="description"
          name="description"
          defaultValue={editMode ? editInfo.description : ""}
        ></textarea>
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

export default PracticalExpForm;
