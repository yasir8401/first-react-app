import React from "react";
import PropTypes from "prop-types";
import "./TaskFour.css";

function TaskFour(props) {
  return (
    <div>
      <h1>Task 4</h1>
      <div> Numbers </div>
      <div>Age = {props.age + 10}</div>
      <div className="salaryClass">Salary = {props.salary}</div>
      <div>Commission = {calculateCommssion(props.salary)}</div>
    </div>
  );
}

function calculateCommssion(salary) {
  return (salary * 15) / 100;
}

TaskFour.propTypes = {};

export default TaskFour;
