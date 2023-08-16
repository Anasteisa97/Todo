import React, { FC } from "react";
import { TodoItemType, TodoItemHandlers } from "../../types";
import { getTodoItemClassName } from "../../utils";

type TodoItemProps = TodoItemType & TodoItemHandlers;

const TodoItem: FC<TodoItemProps> = ({
  id,
  name,
  status,
  deleteTodo,
  setCurrentTodoID,
}) => {
  let itemClassName = getTodoItemClassName(status);

  const onEdit = () => setCurrentTodoID(id);
  const onDelete = () => deleteTodo(id);

  return (
    <div className={itemClassName}>
      <span className="list__item-name">{name}</span>
      <div className="list__item-btns">
        <button onClick={onEdit}>&#9997;</button>
        <button onClick={onDelete} className="list__item-delete">
          &#10008;
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
