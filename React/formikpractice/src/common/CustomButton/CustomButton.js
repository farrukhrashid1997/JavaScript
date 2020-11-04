import React from "react";
import Constants from "../../helpers/Constants";
import PropTypes from "prop-types";
import "./style.scss";

function CustomButton({ type, title, onClick, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        type === Constants.secondary
          ? "custom-button custom-button-secondary"
          : "custom-button custom-button-primary"
      }
      disabled={disabled}
    >
      {title}
    </button>
  );
}

CustomButton.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

CustomButton.defaultProps = {
  type: Constants.primary,
  onClick: null,
  disabled: false,
};

export default CustomButton;
