/* eslint-disable react/prop-types */

const ProjectsCV = (props) => {
  return (
    <section>
      <h3>Projekte</h3>

      {props.info.map((station, idx) => {
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
      })}
    </section>
  );
};

export default ProjectsCV;
