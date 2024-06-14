const SkillsForm = () => {
  return (
    <>
      <div>
        <label htmlFor="skill">Fähigkeit</label>
        <input
          type="text"
          id="skill"
          name="skill"
          defaultValue="Englisch"
        ></input>
      </div>
      <div>
        <label htmlFor="level">Niveau</label>
        <input
          type="text"
          id="level"
          name="level"
          defaultValue="fließend"
        ></input>
      </div>
      <button type="submit">Submit</button>{" "}
    </>
  );
};

export default SkillsForm;
