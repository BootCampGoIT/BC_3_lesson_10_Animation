import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./styles.module.css";

const VisibleUnvisible = () => {
  const [isVisble, setIsVisible] = useState(false);
  const [isVisbleButton, setIsVisibleButton] = useState(true);

  const onHandleChange = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <>
      <CSSTransition
        in={isVisble}
        timeout={3000}
        classNames={styles}
        unmountOnExit
        onEnter={() => setIsVisibleButton((prev) => !prev)}
        onExited={() => setIsVisibleButton((prev) => !prev)}>
        <div>
          <h2>Component</h2>
          <button onClick={onHandleChange}>Hide</button>
        </div>
      </CSSTransition>

      {isVisbleButton && <button onClick={onHandleChange}>Show</button>}
    </>
  );
};

export default VisibleUnvisible;
