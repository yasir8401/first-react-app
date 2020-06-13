import React from "react";
import PropTypes from "prop-types";

function Hello(props) {
  return (
    <div>
      <h1>Task 1</h1>
      <div>Hello from {props.name}</div>
    </div>
  );
}

Hello.propTypes = {};

export default Hello;
