/* eslint-disable react/prop-types */

const EducationInfoCV = (props) => {
  return (
    <section>
      <h3>Ausbildung</h3>

      {props.info.map((station, idx) => {
        return (
          <div className="education-point" key={idx}>
            <div>
              <p>
                {station.startDate}-{station.endDate}
              </p>
            </div>
            <div>
              <p>{`${station.university}(${station.location})`}</p>
              <p>{station.subject}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default EducationInfoCV;
