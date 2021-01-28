import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { Title } from "./MountStyled";
import "./style.css";
import styles from "./style.module.css";

const Mount = () => {
  //   const [state, setState] = useState(false);
  //   useEffect(() => {
  //     setState(true);
  //   }, []);
  return (
    <>
      {/* <CSSTransition in={true} timeout={3000} classNames={styles} appear>
        <h2>Hello from cssTransition</h2>
      </CSSTransition> */}

      {/* ======================= styled  ============================*/}
      <Title in={true} appear>
        Hello from cssTransition
      </Title>

      {/* ============== bug ====================== */}
      {/* <CSSTransition in={state} timeout={3000} classNames={styles} >
        <h2>Hello from cssTransition</h2>
      </CSSTransition> */}
    </>
  );
};

export default Mount;
