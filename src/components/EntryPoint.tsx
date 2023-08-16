import React, { useEffect, useState, FC } from "react";
import { TodoItemType } from "../types";
import { initialTodos } from "../initialState";
import Details from "./Details";
import { ResizeBar } from "./ResizeBar";
import Sidebar from "./Sidebar/Sidebar";

const INITIAL_SIDEBAR_WIDTH = 35; // %
const MIN_SIDEBAR_WIDTH = 200; // px

const EntryPont: FC = () => {
  const [todos, setTodos] = useState<TodoItemType[]>(initialTodos);
  const [currentTodoID, setCurrentTodoID] = useState<null | string>(null);
  const [filteredTodos, setFilteredTodos] =
    useState<TodoItemType[]>(initialTodos);
  const [searchStr, setSearchStr] = useState("");
  const [leftWidth, setLeftWidth] = useState(INITIAL_SIDEBAR_WIDTH);
  const [isResizing, setIsResizing] = useState(false);

  useEffect(() => {
    filterTodos(searchStr); // фильтруем todos каждый раз при изменении основного стейта или поисковой строки
  }, [todos, searchStr]);

  const handleMouseDown = () => {
    setIsResizing(true); // при нажатии мыши на "resize-bar" разрешаем ресайз левой панели
  };

  const handleMouseUp = () => {
    setIsResizing(false); // при отпускании мыши запрещаем ресайз левой панели
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isResizing) {
      const containerWidth = e.currentTarget.offsetWidth; // вычисляем ширину контейнера ".App"
      const mouseX = e.pageX > MIN_SIDEBAR_WIDTH ? e.pageX : MIN_SIDEBAR_WIDTH; // получаем горизонтальную координату и проверяем, меньше ли она чем MIN_LEFT_BAR_WIDTH
      const newLeftWidth = (mouseX / containerWidth) * 100; // рассчитываем новую относительную ширину левой панели
      setLeftWidth(newLeftWidth);
    }
  };

  /**
   * Фильтрация основного списка todo для поисковой выдачи
   * @param searchString
   */
  const filterTodos = (searchString: string) => {
    if (searchString.trim()) {
      // если значение поиска не пустое
      let newList = todos.filter((todo) => {
        //фильтруем todos
        const name = todo.name.toLowerCase();
        const filterString = searchString.toLowerCase();
        return name.includes(filterString); // если название todo содержится в поисковой строке, то возвращаем todo
      });
      setFilteredTodos(newList);
    } else {
      // если значение поиска пустое, возвращаем исходный список todo
      setFilteredTodos(todos);
    }
  };

  /**
   * Удаление todo
   * @param id
   */
  const deleteTodo = (id: string) => {
    if (id === currentTodoID) {
      // если id удаляемой todo равно id редактируемой todo
      setCurrentTodoID(null); // обнуляем currentTodoID, чтобы не отображать детальный компонент todo
    }
    setTodos((prevState: TodoItemType[]) =>
      prevState.filter((todo) => todo.id !== id)
    );
  };
  /**
   * Обновление todo после редактирования
   * @param id
   * @param newTodo
   */
  const updateTodo = (id: string, newTodo: TodoItemType) => {
    setTodos((prevState: TodoItemType[]) =>
      prevState.map((todo) => (todo.id === id ? newTodo : todo))
    );
    setCurrentTodoID(null);
  };
  /**
   * Добавление todo
   * @param newTodo
   */
  const addTodo = (newTodo: TodoItemType) => {
    setTodos((prevState: TodoItemType[]) => [...prevState, newTodo]);
  };

  // получаем текущую todo на основе currentTodoID
  const currentTodo = todos.find((todo) => todo.id === currentTodoID);

  return (
    <div
      className="App"
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <Sidebar
        todos={todos}
        leftWidth={leftWidth}
        searchStr={searchStr}
        setSearchStr={setSearchStr}
        addTodo={addTodo}
        filteredTodos={filteredTodos}
        deleteTodo={deleteTodo}
        setCurrentTodoID={setCurrentTodoID}
      />
      <ResizeBar handleMouseDown={handleMouseDown} />
      {currentTodo && (
        <Details currentTodo={currentTodo} updateTodo={updateTodo} />
      )}
    </div>
  );
};

export default EntryPont;
