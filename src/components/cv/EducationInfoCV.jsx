/* eslint-disable react/prop-types */

const EducationInfoCV = ({ info, visible }) => {
  return visible ? (
    <section className="left-col">
      <h2>Ausbildung</h2>

      {info.map((station, idx) => {
        if (station.visible === true) {
          return (
            <div className="education-point" key={idx}>
              <p>{station.subject}</p>
              <p>
                {`${station.university}` +
                  (station.location !== "" ? `, ${station.location}` : "")}
              </p>
              <p>
                {station.startDate}-{station.endDate}
              </p>
            </div>
          );
        }
      })}
    </section>
  ) : (
    <></>
  );
};

export default EducationInfoCV;
