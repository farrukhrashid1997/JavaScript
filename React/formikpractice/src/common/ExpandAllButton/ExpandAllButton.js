import React from "react";
import strings from "../../localisation";
import PropTypes from "prop-types";
import "./style.scss";

function ExpandAllButton({ expandStatus, setExpandStatus }) {
  const isExpand = Object.keys(expandStatus).some((list) => expandStatus[list]);
  const handleExpandAll = () => {
    const tempExpandStatus = { ...expandStatus };
    Object.keys(tempExpandStatus).map(
      (key) => (tempExpandStatus[key] = !isExpand)
    );
    setExpandStatus(tempExpandStatus);
  };

  return (
    <div className="expand-row">
      <span
        role=""
        tabIndex={0}
        onClick={handleExpandAll}
        className="expand-row-text"
      >
        {isExpand ? strings.collapseAll : strings.expandAll}
      </span>
    </div>
  );
}

ExpandAllButton.propTypes = {
  expandStatus: PropTypes.object.isRequired,
  setExpandStatus: PropTypes.func.isRequired,
};

export default ExpandAllButton;
