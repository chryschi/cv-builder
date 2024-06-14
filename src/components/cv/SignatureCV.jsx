/* eslint-disable react/prop-types */

const SignatureCV = (props) => {
  return (
    <section>
      <div className="education-point">
        <div>
          <p>{`${props.info.location}, den ${props.info.date}`}</p>
        </div>
      </div>
    </section>
  );
};

export default SignatureCV;
