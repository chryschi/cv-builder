/* eslint-disable react/prop-types */

const ProjectsCV = ({ info, visible }) => {
  return visible ? (
    <section>
      <h3>Projekte</h3>

      {info.map((station, idx) => {
        if (station.visible === true) {
          return (
            <div className="education-point" key={idx}>
              <h4 className="project-title">{station.project}</h4>

              <div>
                <p>{station.technologies}</p>
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
