/* eslint-disable react/prop-types */

import MaterialIcon from "./MaterialIcon";

const IconButton = ({
  iconCode,
  onClick,
  childrenBeforeIcon = false,
  children,
  buttonClass,
}) => {
  return (
    <button className={buttonClass} onClick={onClick}>
      {childrenBeforeIcon ? children : null}
      <MaterialIcon iconCode={iconCode} />
      {!childrenBeforeIcon ? children : null}
    </button>
  );
};

export default IconButton;
