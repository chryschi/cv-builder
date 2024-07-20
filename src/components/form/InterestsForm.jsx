/* eslint-disable react/prop-types */

const InterestsForm = ({ editInfo, editMode }) => {
  return (
    <>
      <div>
        <label htmlFor="interest">Interesse</label>
        <input
          type="text"
          id="interest"
          name="interest"
          defaultValue={editMode ? editInfo.interest : "Musik"}
        ></input>
      </div>
      {/* <div>
        <label htmlFor="level">Niveau</label>
        <input
          type="text"
          id="level"
          name="level"
          defaultValue={editMode ? editInfo.level : "fließend"}
        ></input>
      </div> */}
    </>
  );
};

export default InterestsForm;
