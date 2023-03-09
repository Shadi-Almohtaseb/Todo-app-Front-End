import React from "react";

const TodoItem = ({ todo, completeTodo, deleteTodo }) => {
  return (
    <div>
      <div
        className={`flex sm:flex-row flex-col items-center ${
          todo.complete && "bg-green-300"
        } gap-5 bg-white  text-xl px-10 mt-[4px] rounded-lg cursor-pointer hover:bg-slate-200 duration-300`}
      >
        <span className="xl:px-3  flex items-center justify-between sm:w-fit w-full">
          <input
            type="checkbox"
            id="in"
            className="cursor-pointer bg-blue-100 border-sky-300 text-blue-500 focus:ring-blue-200 w-4 h-4"
            checked={todo.complete}
            onClick={() => completeTodo(todo._id)}
          />
          <span
            onClick={() => deleteTodo(todo._id)}
            className="xl:pl-20 sm:hidden flex cursor-pointer hover:animate-bounce"
          >
            🗑️
          </span>
        </span>
        <span
          className={`xl:px-20 sm:px-3 w-[87%] py-6 ${
            todo.complete && "line-through"
          }`}
          onClick={() => completeTodo(todo._id)}
        >
          {todo.text}
        </span>
        <span className="hidden xl:flex">
          {todo.complete ? "completed" : "pending"}
        </span>
        <span
          onClick={() => deleteTodo(todo._id)}
          className="xl:ml-20 sm:flex hidden cursor-pointer hover:animate-bounce"
        >
          🗑️
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
