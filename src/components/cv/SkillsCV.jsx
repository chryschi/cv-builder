/* eslint-disable react/prop-types */

const SkillsCV = ({ info, visible }) => {
  return visible ? (
    <section>
      <h3>Kenntnisse und Interessen</h3>

      {info.map((station, idx) => {
        if (station.visible === true) {
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
        }
      })}
    </section>
  ) : (
    <></>
  );
};

export default SkillsCV;
