/* eslint-disable react/prop-types */

const SignatureCV = ({ info, visible }) => {
  let date, dateFormatted;

  if (info.date !== undefined) {
    date = new Date(info.date);
    dateFormatted = new Intl.DateTimeFormat("de-DE").format(date);
  }

  return visible ? (
    <section>
      <div className="education-point">
        <div>
          <p>{`${info.location}, ${dateFormatted}`}</p>
        </div>
      </div>
    </section>
  ) : (
    <></>
  );
};

export default SignatureCV;
