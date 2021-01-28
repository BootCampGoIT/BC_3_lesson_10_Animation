import React, { useState } from "react";

const initialText = "";

const Form = ({ addText }) => {
  const [text, setText] = useState("");
  const onHandleSubmit = (e) => {
    e.preventDefault();
    addText(text);
    setText(initialText);
  };
  const onHandleChange = (e) => {
    const value = e.target.value;
    setText(value);
  };
  return (
    <form onSubmit={onHandleSubmit}>
      <label>
        Form
        <input type='text' value={text} onChange={onHandleChange} />
      </label>
      <button type='submit'>Add something</button>
    </form>
  );
};

export default Form;
