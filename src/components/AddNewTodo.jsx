import React from "react";
const AddNewTodo = ({ createTodo, setTodoText, todoText }) => {
  return (
    <div className="rounded-xl bg-sky-200 lg:w-7/12 md:w-10/12 w-11/12 my-5">
      <div className="p-5 flex">
        <form
          onSubmit={createTodo}
          className="p-2 bg-white rounded-lg flex w-full"
        >
          <input
            type="text"
            className="border-none focus:ring-white w-full px-3 py-2 rounded-lg text-xl"
            placeholder="Add a new todo!"
            onChange={(e) => setTodoText(e.target.value)}
            value={todoText}
          />
          <button
            type="submit"
            className="pb-2 px-3 text-4xl text-white bg-sky-500 rounded-lg"
          >
            +
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewTodo;
