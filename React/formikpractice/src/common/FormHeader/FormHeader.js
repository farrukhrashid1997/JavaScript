import React from "react";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import "./style.scss";
import PropTypes from "prop-types";

function FormHeader({
  title,
  desc,
  buttonIcon,
  backButtonFunc,
  buttonFunc,
  buttonTitle,
}) {
  return (
    <div className="form-header-container">
      <div className="form-header-row-left">
        <div className="form-header-row">
          {backButtonFunc && (
            <ArrowBackIos
              classes={{ root: "form-header-backbutton" }}
              onClick={backButtonFunc}
            />
          )}
          <h2 className="form-header-title-text">{title}</h2>
        </div>
        <p className="form-header-desc-text">{desc}</p>
      </div>
      {buttonFunc && (
        <div className="form-header-row-right">
          <button
            type="button"
            className="form-header-bar-button"
            type="button"
            onClick={buttonFunc}
          >
            {buttonIcon && (
              <span className="form-header-bar-button-icon">{buttonIcon}</span>
            )}
            {buttonTitle}
          </button>
        </div>
      )}
    </div>
  );
}
FormHeader.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  backButtonFunc: PropTypes.func,
  buttonFunc: PropTypes.func,
  buttonIcon: PropTypes.object,
  buttonTitle: PropTypes.string,
};

FormHeader.defaultProps = {
  backButtonFunc: null,
  buttonFunc: null,
  buttonTitle: "",
  buttonIcon: null,
};

export default FormHeader;
