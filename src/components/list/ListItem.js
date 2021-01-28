import React from "react";

const ListItem = ({ id, text, deleteText }) => {
  return (
    <li>
      <h3>{text}</h3>
      <button id={id} onClick={deleteText}>
        Delete
      </button>
    </li>
  );
};

export default ListItem;
