/* eslint-disable react/prop-types */

const SkillsForm = ({ editInfo, editMode }) => {
  return (
    <>
      <div>
        <label htmlFor="skill">Fähigkeit</label>
        <input
          type="text"
          id="skill"
          name="skill"
          defaultValue={editMode ? editInfo.skill : "Englisch"}
        ></input>
      </div>
      <div>
        <label htmlFor="level">Niveau</label>
        <input
          type="text"
          id="level"
          name="level"
          defaultValue={editMode ? editInfo.level : "fließend"}
        ></input>
      </div>
    </>
  );
};

export default SkillsForm;
