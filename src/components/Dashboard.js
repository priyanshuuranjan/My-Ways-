import React from "react";
import "./Dashboard.css";

const Card = () => {
  return (
    <div className="card">
      <div className="left-section">
        <div className="chat-room-header">
          <h3>Chat Room</h3>
          <i className="camera-icon"></i>
        </div>
        <div className="message-header">
          <input type="text" placeholder="Write a message" />
        </div>
      </div>
      <div className="right-section">
        <div className="">
          <h4>Task Board</h4>
          <div className="task-board"></div>
          <div className="task-category">To Do</div>
          <div className="task-category">In Progress</div>
          <div className="task-category">Done</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
