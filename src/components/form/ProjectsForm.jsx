const ProjectsForm = () => {
  return (
    <>
      <div>
        <label htmlFor="project">Projekt</label>
        <input
          type="text"
          id="project"
          name="project"
          defaultValue="Todo-App"
        ></input>
      </div>
      <div>
        <label htmlFor="technologies">Verwendete Technologien</label>
        <input
          type="text"
          id="technologies"
          name="technologies"
          defaultValue="React, Javascript"
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
      <button type="submit">Submit</button>{" "}
    </>
  );
};

export default ProjectsForm;
