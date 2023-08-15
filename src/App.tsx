import React, { useEffect, useState } from "react";
import "./App.scss";
import List from "./components/List";
import Detail from "./components/Detail";
import { initialTodos } from "./initialState";
import { TodoItem } from "./types";
import AddInput from "./components/AddInput";
import Search from "./components/Search";

function App() {
  const [todos, setTodos] = useState<TodoItem[]>(initialTodos);
  const [currentTodoID, setCurrentTodoID] = useState<null | number>(null);
  const [filtered, setFiltered] = useState<TodoItem[]>(initialTodos);
  const [searchStr, setSearchStr] = useState("");
  const [leftWidth, setLeftWidth] = useState(30);
  const [isResizing, setIsResizing] = useState(false);

  useEffect(() => {
    search(searchStr); // фильтруем todos каждый раз при изменении основного стейта или поисковой строки
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
      const mouseX = e.pageX > 200 ? e.pageX : 200; // получаем горизонтальную координату и проверяем, меньше ли она чем 200
      const newLeftWidth = (mouseX / containerWidth) * 100; // рассчитываем новую относительную ширину левой панели
      setLeftWidth(newLeftWidth);
    }
  };

  /**
   * Фильтрация основного списка todo для поисковой выдачи
   * @param val
   */
  const search = (val: string) => {
    if (val.trim()) {
      // если значение поиска не пустое
      let newList = todos.filter((todo) => {
        //фильтруем todos
        const name = todo.name.toLowerCase();
        const filterString = val.toLowerCase();
        return name.includes(filterString); // если название todo содержится в поисковой строке, то возвращаем todo
      });
      setFiltered(newList);
    } else {
      // если значение поиска пустое, возвращаем исходный список todo
      setFiltered(todos);
    }
  };

  /**
   * Удаление todo
   * @param id
   */
  const deleteTodo = (id: number) => {
    if (id === currentTodoID) {
      // если id удаляемой todo равно id редактируемой todo
      setCurrentTodoID(null); // обнуляем currentTodoID, чтобы не отображать детальный компонент todo
    }
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  /**
   * Обновление todo после редактирования
   * @param id
   * @param newTodo
   */
  const updateTodo = (id: number, newTodo: TodoItem) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? newTodo : todo;
      })
    );
    setCurrentTodoID(null);
  };
  /**
   * Добавление todo
   * @param newTodo
   */
  const addTodo = (newTodo: TodoItem) => {
    setTodos([...todos, newTodo]);
  };

  // получаем текущую todo на основе currentTodoID
  const currentTodo = todos.find((todo) => todo.id === currentTodoID);

  return (
    <div
      className="App"
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div className="App-left" style={{ width: `${leftWidth}%` }}>
        <Search setSearchStr={setSearchStr} />
        <AddInput addTodo={addTodo} />
        {todos.length > 0 && (
          <List
            todos={filtered}
            deleteTodo={deleteTodo}
            setCurrentTodoID={setCurrentTodoID}
          />
        )}
      </div>
      <div className="resize-bar" onMouseDown={handleMouseDown}></div>
      <div className="App-right">
        {currentTodoID && (
          <Detail currentTodo={currentTodo} updateTodo={updateTodo} />
        )}
      </div>
    </div>
  );
}

export default App;
