/* eslint-disable react/prop-types */

const SkillsCV = ({ info, visible }) => {
  return visible ? (
    <section className="left-col">
      <h2>Kenntnisse</h2>

      {info.map((station, idx) => {
        if (station.visible === true) {
          return (
            <div className="skill-point" key={idx}>
              <p>{station.skill}</p>
              <p>{station.level}</p>
            </div>
          );
        }
      })}
    </section>
  ) : (
    <></>
  );
};

export default SkillsCV;
