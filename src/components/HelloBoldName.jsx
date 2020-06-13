import React from "react";
import PropTypes from "prop-types";

function HelloBoldName(props) {
  return (
    <div>
      <h1>Task 2</h1>
      <div>
        Welcome <strong>{props.name}</strong> to my first react class
      </div>
    </div>
  );
}

HelloBoldName.propTypes = {};

export default HelloBoldName;
