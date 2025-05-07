import React from "react";
import "./style.css";

function Note(props) { 
    function handeleClick() {
        props.onDelete(props.id);
    }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handeleClick}>Delete</button>
    </div>
  );
}
export default Note;