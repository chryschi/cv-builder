/* eslint-disable react/prop-types */

const CareerInfoCV = (props) => {
  return (
    <section>
      <h3>Karriere</h3>

      {props.info.map((station, idx) => {
        return (
          <div className="career-point" key={idx}>
            <div>
              <p>
                {station.startDate}-{station.endDate}
              </p>
            </div>
            <div>
              <p>{station.position}</p>
              <p>{station.company}</p>
              <p>{station.description}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default CareerInfoCV;
