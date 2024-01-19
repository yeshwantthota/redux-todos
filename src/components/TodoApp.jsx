import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, fetchTodos, filterTodos, removeTodo } from "../todosSlice";

const TodoApp = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.list);
  const status = useSelector((state) => state.todos.status);

  const [newTodo, setNewTodo] = useState("");
  const [searchTodo, setSearchTodo] = useState("");
  useEffect(() => {
    dispatch(fetchTodos());
    console.log(todos);
  }, [dispatch]);

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };
  const handleSearchTodo = () => {
    dispatch(filterTodos(searchTodo));
    setSearchTodo("");
  };
  const handleAddTodo = () => {
    dispatch(
      addTodo({
        id: Date.now(),
        title: newTodo,
      })
    );
    setNewTodo("");
  };
  return (
    <div>
      {status === "succeeded" && (
        <div className="flex flex-col justify-cente w-1/2 ">
          <ul>
            {todos.map((todo) => (
              <li
                className="bg-blue-200 m-2 p-2 rounded-lg flex justify-between items-center"
                key={todo.id}
              >
                {todo.title}
                <button
                  className="bg-red-200 p-2 rounded-lg"
                  onClick={() => handleRemoveTodo(todo.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="flex flex-col">
            <input
              className="border border-blue-200 m-2
            p-2 rounded-lg"
              type="text"
              placeholder="Enter new todo"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <button
              className="bg-green-200 w-1/5 m-2 p-2 rounded-lg"
              onClick={handleAddTodo}
            >
              Add Todo
            </button>
          </div>

          <div className="flex flex-col">
            <input
              className="border border-blue-200 m-2
            p-2 rounded-lg"
              type="text"
              placeholder="Search todos"
              value={searchTodo}
              onChange={(e) => setSearchTodo(e.target.value)}
            />
            <button
              className="bg-green-200 w-1/5 m-2 p-2 rounded-lg
                "
              onClick={handleSearchTodo}
            >
              Search
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoApp;
