/* eslint-disable react/prop-types */

const CareerInfoCV = ({ info, visible }) => {
  return visible ? (
    <section>
      <h2>Karriere</h2>

      {info.map((station, idx) => {
        if (station.visible === true) {
          return (
            <div className="career-point" key={idx}>
              <h3>{station.position}</h3>
              <p>
                {station.company} | {station.startDate}-{station.endDate}
              </p>
              <p>{station.description}</p>
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
