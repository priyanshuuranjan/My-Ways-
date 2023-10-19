import React from "react";
import "./Dashboard.css";

const Card = () => {
  return (
    <div className="card">
      <div className="left-section">
        <h2 className="heading">Chat Room</h2>
        <button className="button">Join</button>
      </div>
      <div className="right-section">
        <div className="task-board">
          <h3>Task Board</h3>
          <div className="task-list">
            <div className="todo-list">
              <h4>Todo</h4>
              {/* You can add your Todo items here */}
            </div>
            <div className="in-progress-list">
              <h4>In Progress</h4>
              {/* You can add your In Progress items here */}
            </div>
            <div className="done-list">
              <h4>Done</h4>
              {/* You can add your Done items here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
