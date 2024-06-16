/* eslint-disable react/prop-types */

const SignatureCV = ({ info, visible }) => {
  return visible ? (
    <section>
      <div className="education-point">
        <div>
          <p>{`${info.location}, den ${info.date}`}</p>
        </div>
      </div>
    </section>
  ) : (
    <></>
  );
};

export default SignatureCV;
