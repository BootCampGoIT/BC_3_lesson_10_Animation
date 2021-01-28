import React from "react";
import ListItem from "./ListItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./list.css";

const List = ({ textList, deleteText }) => {
  return (
    <TransitionGroup component='ul'>
      {textList.map((itemText, idx) => (
        <CSSTransition key={itemText.id} timeout={3000} classNames="item">
          <ListItem {...itemText} deleteText={deleteText} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default List;
