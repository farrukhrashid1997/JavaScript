import React from "react";
import { connect} from "react-redux";
import { buyIceCream } from "../redux";

function IceCreamContainer(props) {
//   const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
//   const dispatch = useDispatch();
  return (
    <div>
      <h2>Num of iceCreams - {props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      numOfIceCreams: state.iceCream.numOfIceCreams
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
