/* eslint-disable react/prop-types */

const EducationInfoCV = ({ info, visible }) => {
  return visible ? (
    <section>
      <h2>Ausbildung</h2>

      {info.map((station, idx) => {
        if (station.visible === true) {
          return (
            <div className="education-point" key={idx}>
              <div>
                <p>
                  {station.startDate}-{station.endDate}
                </p>
              </div>
              <div>
                <p>{station.subject}</p>
                <p>
                  {`${station.university}` +
                    (station.location !== "" ? `, ${station.location}` : "")}
                </p>
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

export default EducationInfoCV;
