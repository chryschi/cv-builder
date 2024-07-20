/* eslint-disable react/prop-types */

const InterestsCV = ({ info, visible }) => {
  return visible ? (
    <section className="left-col">
      <h2>Interessen</h2>

      {info.map((station, idx) => {
        if (station.visible === true) {
          return (
            <div className="interest-point" key={idx}>
              <p>{station.interest}</p>
            </div>
          );
        }
      })}
    </section>
  ) : (
    <></>
  );
};

export default InterestsCV;
