import React, { useState } from "react";

export default function Todoform({ addTodo }) {
  let [title, setTitle] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    let todo = {
      id: String(Math.random()),
      title,
      completed: false,
    };
    addTodo(todo);
    setTitle("");
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="w-100 py-7 px-8 ">
          <div className="font-bold text-4xl flex justify-center py-5">
            To Do List
          </div>
          <div className=" py-6 w-96">
            <div className="flex justify-around">
              <div className=" py-3">
                {/* input text */}
                <form onSubmit={handleSubmit}>
                  <div class="w-100 flex justify-around ">
                    <label className="" for="message"></label>
                    <input
                      id="address"
                      className="text-s font-bold appearance-none block  bg-gray-300 
                      text-gray-700 border border-green-800 rounded py-3 
                      px-9 mb-3 leading-tight"
                      required
                      placeholder="Type Here..."
                      onChange={(e) => setTitle(e.target.value)}
                      value={title}
                    ></input>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex justify-center items-center py-1"></div>
          </div>
        </div>
      </div>
    </>
  );
}
