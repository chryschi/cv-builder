/* eslint-disable react/prop-types */

const ProjectsCV = ({ info, visible }) => {
  return visible ? (
    <section>
      <h2>Praktische Erfahrung</h2>

      {info.map((station, idx) => {
        if (station.visible === true) {
          return (
            <div className="education-point" key={idx}>
              <h3 className="project-title">{station.project}</h3>

              <div>
                <p>
                  {station.technologies.replace(/\s/g, "").split(",").join("|")}
                </p>
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
