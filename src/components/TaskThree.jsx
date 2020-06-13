import React from "react";

function TaskThree({ instructorOne, instructorTwo, instructorList }) {
  return (
    <div>
      <h1>Task 3</h1>
      <div>
        This is first tutorial class of ReactJS by{" "}
        <strong>
          <i>{instructorOne}</i>
        </strong>
        <strong>
          <i>{instructorTwo}</i>
        </strong>
      </div>
      <br />
      <div>
        Below is the list of teachers who are teaching us how to build an
        interactive web app in ReactJS
        <ol style={{ textAlign: "justify" }}>
          {instructorList.map((instructor) => (
            <li key={instructor.key}>{instructor.description}</li>
          ))}
        </ol>
      </div>
      <br />
      <div>
        We have cover following topics in first react tutorial
        <ul style={{ textAlign: "justify" }}>
          <li>Basic Structure of Reacrt Application</li>
          <li>How React is displaying different HTML elements/components</li>
          <li>Ways to define an function</li>
          <li>Passing properties</li>
        </ul>
      </div>
    </div>
  );
}

export default TaskThree;
