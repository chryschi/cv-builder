/* eslint-disable react/prop-types */

const IconButton = ({ iconCode, onClick, children, buttonClass }) => {
  return (
    <button className={buttonClass} onClick={onClick}>
      <span className="material-symbols-outlined">{iconCode}</span>
      {children}
    </button>
  );
};

export default IconButton;
