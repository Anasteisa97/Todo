import React, { FC } from "react";
import Search from "./Search";
import AddInput from "./AddInput";
import {
  TodoItemType,
  TodoItemHandlers,
  SearchProps,
  AddInputProps,
} from "../../types";
import TodoList from "./TodoList";

type SidebarProps = TodoItemHandlers &
  SearchProps &
  AddInputProps & {
    todos: TodoItemType[];
    leftWidth: number;
    filteredTodos: TodoItemType[];
  };

const Sidebar: FC<SidebarProps> = ({
  todos,
  leftWidth,
  searchStr,
  setSearchStr,
  addTodo,
  filteredTodos,
  deleteTodo,
  setCurrentTodoID,
}) => {
  return (
    <div className="App-left" style={{ width: `${leftWidth}%` }}>
      <Search setSearchStr={setSearchStr} searchStr={searchStr} />
      <AddInput addTodo={addTodo} />
      {todos.length > 0 && (
        <TodoList
          todos={filteredTodos}
          deleteTodo={deleteTodo}
          setCurrentTodoID={setCurrentTodoID}
        />
      )}
    </div>
  );
};

export default Sidebar;
