import React from "react";
import CustomButton from "../CustomButton";
import Constants from "../../helpers/Constants";
import PropTypes from "prop-types";
import "./style.scss";

function FormFooter({
  primary,
  secondary,
  primaryFunc,
  secondaryFunc,
  primaryDisabled,
  secondaryDisabled,
}) {
  return (
    <div className="form-footer-container">
      {secondary !== "" && (
        <CustomButton
          title={secondary}
          onClick={secondaryFunc}
          type={Constants.secondary}
          disabled={secondaryDisabled}
        />
      )}
      {primary !== "" && (
        <CustomButton
          type={Constants.primary}
          onClick={primaryFunc}
          title={primary}
          disabled={primaryDisabled}
        />
      )}
    </div>
  );
}

FormFooter.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string,
  primaryFunc: PropTypes.func,
  secondaryFun: PropTypes.func,
  primaryDisabled: PropTypes.bool,
  secondaryDisabled: PropTypes.bool,
};

FormFooter.defaultProps = {
  primary: "",
  secondary: "",
  primaryFunc: null,
  secondaryFunc: null,
  primaryDisabled: false,
  secondaryDisabled: false,
};

export default FormFooter;
