import React, { useState } from "react";
import Form from "./form/Form";
import List from "./list/List";
import List2 from "./list/List2Styled";
import Mount from "./mount/Mount";
import VisibleUnvisible from "./visibleUnvisible/VisibleUnvisible";

const App = () => {
  const [textList, setTextList] = useState([]);
  const addText = (text) => {
    setTextList((prev) => [...prev, { text, id: `${Date.now()}` }]);
  };
  const deleteText = (e) => {
    const id = e.target.id;
    setTextList([...textList.filter((itemText) => itemText.id !== id)]);
  };
  return (
    <div>
      {/* <Mount /> */}
      {/* <VisibleUnvisible /> */}
      <Form addText={addText} />
      <List textList={textList} deleteText={deleteText} />
      {/* <List2 textList={textList} deleteText={deleteText} /> */}
    </div>
  );
};

export default App;
