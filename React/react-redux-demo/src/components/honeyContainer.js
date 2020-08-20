import React from "react";
import { connect} from "react-redux";
import { buyHoney } from "../redux";

function HoneyContainer(props) {

  return (
    <div>
      <h2>Num of honey - {props.numOfHoney}</h2>
      <button onClick={props.buyHoney}>Buy Honey</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      numOfHoney: state.honey.numOfHoney
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        buyHoney: () => dispatch(buyHoney())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HoneyContainer);
