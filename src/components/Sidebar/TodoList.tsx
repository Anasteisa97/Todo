import React, { FC } from "react";
import { TodoItemType, TodoItemHandlers } from "../../types";
import TodoItem from "./TodoItem";

type TodoListListProps = TodoItemHandlers & {
  todos: TodoItemType[];
};

const TodoList: FC<TodoListListProps> = ({ todos, ...props }) => {
  return (
    <div className="list">
      {todos.map((todo) => {
        return (
          <TodoItem
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

export default TodoList;
