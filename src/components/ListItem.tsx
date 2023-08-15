import React, { FC } from "react";
import { TodoItem, TodoItemHandles, Status } from "../types";

type ListItemProps = TodoItem & TodoItemHandles;

const ListItem: FC<ListItemProps> = ({
  id,
  name,
  status,
  deleteTodo,
  setCurrentTodoID,
}) => {
  let itemClassName = "list__item";
  switch (status) {
    case Status.Pending:
      itemClassName += " list__item--pending";
      break;
    case Status.InProgress:
      itemClassName += " list__item--progress";
      break;
    case Status.Done:
      itemClassName += " list__item--done";
      break;
  }

  return (
    <div className={itemClassName}>
      <span className="list__item-name">{name}</span>
      <div className="list__item-btns">
        <button onClick={() => setCurrentTodoID(id)}>edit</button>
        <button onClick={() => deleteTodo(id)}>x</button>
      </div>
    </div>
  );
};

export default ListItem;
