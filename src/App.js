import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";
import HelloBoldName from "./components/HelloBoldName";
import TaskThree from "./components/TaskThree";
import TaskFour from "./components/TaskFour";

function App() {
  const instructorList = [
    { description: "Zia Khan", key: 1 },
    { description: "Zeeshan Hanif", key: 2 },
    { description: "Adil Altaf", key: 3 },
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <Hello name="Yasir Nisar" />
      <hr />
      <HelloBoldName name="Zeeshan Hanif" />
      <hr />
      <TaskThree
        instructorOne="Zeeshan Hanif"
        instructorTwo="Zia Khan"
        instructorList={instructorList}
      />
      <TaskFour age={25} salary={50000} />
    </div>
  );
}

export default App;
