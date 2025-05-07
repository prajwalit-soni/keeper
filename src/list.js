import React from "react";
import "./style.css";

const List = (props) => {
  return (
    <div className="note-box">
      <h3>{props.Title}</h3>
      <p>{props.text}</p>
    </div>
  );
};

export default List;