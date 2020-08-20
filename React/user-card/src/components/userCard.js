import React from "react";
import "../App.css";
import user from "../images/user.png";
import { connect } from "react-redux";

function userCard({card}) {
  return (
    <div>
      <section className="User__img">
        <img src={user} alt="user" />
      </section>

      <section className="User__info">
        <p>
          {" "}
          <span className="faint">I am</span> a {card.description}
        </p>
        <p>
          {" "}
          <span className="faint">I like</span> {card.likes}
        </p>

        <p className="User__info__details User__info__divider faint">
          <span>Name: </span>
          <span>{card.name}</span>
        </p>
        <p className="User__info__details faint">
          <span>Location: </span>
          <span>{card.location}</span>
        </p>
      </section>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    card: state,
  };
};

export default connect(mapStateToProps)(userCard);
