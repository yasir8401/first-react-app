import React from "react";

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

export default HelloBoldName;
