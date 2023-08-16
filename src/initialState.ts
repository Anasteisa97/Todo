import { Status, TodoItemType } from "./types";
import { nanoid } from "nanoid";

export const initialTodos: TodoItemType[] = [
  {
    id: nanoid(),
    name: "todo 1",
    status: Status.InProgress,
  },
  {
    id: nanoid(),
    name: "todo 2",
    status: Status.Pending,
  },
  {
    id: nanoid(),
    name: "todo 32",
    status: Status.Done,
  },
];
