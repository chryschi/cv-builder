/* eslint-disable react/prop-types */

const ProjectsForm = ({ editInfo, editMode }) => {
  return (
    <>
      <div>
        <label htmlFor="project">Projekt</label>
        <input
          type="text"
          id="project"
          name="project"
          defaultValue={editMode ? editInfo.project : "Todo-App"}
        ></input>
      </div>
      <div>
        <label htmlFor="technologies">Verwendete Technologien</label>
        <input
          type="text"
          id="technologies"
          name="technologies"
          defaultValue={editMode ? editInfo.technologies : "React, Javascript"}
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
    </>
  );
};

export default ProjectsForm;
