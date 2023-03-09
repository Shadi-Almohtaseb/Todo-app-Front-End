import React from "react";
import TodoItem from "./TodoItem";

const TodosList = ({ todos, completeTodo, deleteTodo }) => {
  return (
    <div className="rounded-xl min-h-[600px] bg-sky-200 backdrop:blur-md bg-opacity-60 lg:w-7/12 md:w-10/12 w-11/12 p-4 mb-16">
      <div className="flex flex-col gap-3">
        <span className="text-4xl font-semibold">Todo</span>
        <span className="text-xl">You have {todos.length} Todo</span>
      </div>
      <div className="flex flex-col my-2 mt-6">
        <div className="hidden items-center xl:flex justify-between bg-blue-500 py-2 rounded-t-xl text-white font-bold text-2xl">
          <div className="flex items-center gap-5 bg-blue-500 py-2 rounded-t-xl text-white ">
            <span className="px-14">#</span>
            <span className="px-14">Title</span>
          </div>
          <span className="pr-44">Status</span>
        </div>
        {todos.length === 0 ? (
          <div className="text-center text-3xl mt-10 font-semibold italic">
            There is No item yet!
          </div>
        ) : (
          todos.map((todo) => {
            return (
              <TodoItem
                key={todo._id}
                deleteTodo={deleteTodo}
                completeTodo={completeTodo}
                todo={todo}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default TodosList;
