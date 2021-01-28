import React from "react";
import ListItem from "./ListItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import transition from "styled-transition-group";
import "./list.css";

const LI = transition.li.attrs({
  mountOnEnter: true,
  unmountOnExit: true,
  timeout: 1000,
})`
&:enter { opacity: 0.01; }
&:enter-active {
  opacity: 1;
  transition: opacity 1000ms ease-in;
}
&:exit {
    opacity: 1;
}
&:exit-active {
    opacity: 0.01;
    transition: opacity 1000ms ease-in
}
`;

const List2 = ({ textList, deleteText }) => {
  return (
    <TransitionGroup component='ul'>
      {textList.map((itemText) => (
        <LI key={itemText.id} timeout={1000}>
          <ListItem {...itemText} deleteText={deleteText} />
        </LI>
      ))}
    </TransitionGroup>
  );
};

export default List2;
