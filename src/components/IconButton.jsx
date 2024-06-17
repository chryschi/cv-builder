/* eslint-disable react/prop-types */

import MaterialIcon from "./MaterialIcon";

const IconButton = ({ iconCode, onClick, children, buttonClass }) => {
  return (
    <button className={buttonClass} onClick={onClick}>
      <MaterialIcon iconCode={iconCode} />
      {children}
    </button>
  );
};

export default IconButton;
