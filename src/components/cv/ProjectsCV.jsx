/* eslint-disable react/prop-types */

const ProjectsCV = ({ info, visible }) => {
  return visible ? (
    <section>
      <h3>Projekte</h3>

      {info.map((station, idx) => {
        if (station.visible === true) {
          return (
            <div className="education-point" key={idx}>
              <div>
                <p>{station.project}</p>
                <p>{station.technologies}</p>
              </div>
              <div>
                <p>{station.description}</p>
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

export default ProjectsCV;
