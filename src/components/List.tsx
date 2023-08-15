import React, { FC } from "react";
import { TodoItem, TodoItemHandles } from "../types";
import ListItem from "./ListItem";

type ListProps = TodoItemHandles & {
  todos: TodoItem[];
};

const List: FC<ListProps> = ({ todos, ...props }) => {
  return (
    <div className="list">
      {todos.map((todo) => {
        return (
          <ListItem
            key={todo.id}
            name={todo.name}
            id={todo.id}
            status={todo.status}
            {...props}
          />
        );
      })}
    </div>
  );
};

export default List;
