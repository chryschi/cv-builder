/* eslint-disable react/prop-types */

const CareerInfoCV = ({ info, visible }) => {
  return visible ? (
    <section>
      <h3>Karriere</h3>

      {info.map((station, idx) => {
        if (station.visible === true) {
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
        }
      })}
    </section>
  ) : (
    <></>
  );
};

export default CareerInfoCV;
