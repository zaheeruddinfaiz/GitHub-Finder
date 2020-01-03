import React from "react";
import propTypes from "prop-types";
const UsersItem = ({ user: { html_url, login, avatar_url } }) => {
  // console.log(key)
  //   const { html_url, login, avatar_url } = props.user;
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        className="round-img"
        style={{ width: "70px" }}
        alt="Comming Here .."
      ></img>
      <h3>{login} </h3>
      <div>
        <a href={html_url} className="btn btn-dark btn-sm my-1">
          More
        </a>
      </div>
    </div>
  );
};
UsersItem.propTypes = {
  user: propTypes.object.isRequired
};
export default UsersItem;
