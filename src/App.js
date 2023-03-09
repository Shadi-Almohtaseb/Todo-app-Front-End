import React, { useEffect, useState } from "react";
import AddNewTodo from "./components/AddNewTodo";
import TodosList from "./components/TodosList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  const BASE_URL = "http://localhost:5000";

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    fetch(BASE_URL + "/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.log(err));
  };

  const completeTodo = async (id) => {
    const data = await fetch(BASE_URL + "/todos/complete/" + id, {
      method: "PUT",
    }).then((res) => res.json());

    setTodos(
      todos.map((todo) => {
        if (todo._id === data._id) {
          todo.complete = data.complete;
        }
        return todo;
      })
    );
  };

  const createTodo = async (e) => {
    e.preventDefault();
    if (todoText !== "") {
      const data = await fetch(BASE_URL + "/todos/new", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: todoText }),
      }).then((res) => res.json());
      setTodos([...todos, data]);
      setTodoText("");
    }
  };

  const deleteTodo = async (id) => {
    const deleted = await fetch(BASE_URL + "/todos/delete/" + id, {
      method: "DELETE",
    }).then((res) => res.json());
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  return (
    <div className="bg-gradient-to-l from-sky-200 to-indigo-600 h-full">
      <div className="flex items-center justify-start pt-3 h-full flex-col bg-gradient-to-l from-sky-200 to-indigo-600">
        <div className="text-xl my-5  text-white">
          <h1 className="text-4xl font-bold">
            <span className="text-blue-600">Welcome</span> to my
          </h1>
          <h2 className="text-3xl">MERN Stack Todo App</h2>
        </div>
        <AddNewTodo
          createTodo={createTodo}
          todoText={todoText}
          setTodoText={setTodoText}
        />
        <TodosList
          todos={todos}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
        />
      </div>
    </div>
  );
}

export default App;
