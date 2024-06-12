/* eslint-disable react/prop-types */

const SkillsCV = (props) => {
  return (
    <section>
      <h3>Kenntnisse und Interessen</h3>

      {props.info.map((station, idx) => {
        return (
          <div className="skill-point" key={idx}>
            <div>
              <p>{station.skill}</p>
            </div>
            <div>
              <p>{station.level}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default SkillsCV;
