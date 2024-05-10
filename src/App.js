import "./App.css";
import TodoForm from "./components/Todoform.jsx";
import TodoList from "./components/Todolist.jsx";
import CheckAllAndRemaining from "./components/CheckAllAndRemaining.jsx";
import TodoFilter from "./components/TodoFilter.jsx";
import ClearCompleteBtn from "./components/ClearCompleteBtn.jsx";
import { useCallback, useEffect, useState } from "react";

function App() {
  let [todos, setTodos] = useState([]);

  let [filterTodos, setFilterTodos] = useState(todos);

  useEffect(() => {
    fetch("http://localhost:3001/todos")
      .then((res) => res.json())
      .then((todos) => {
        setTodos(todos);
        setFilterTodos(todos);
      });
  }, []);

  let filterBy = useCallback(
    (filter) => {
      if (filter === "All") {
        setFilterTodos(todos);
      }
      if (filter === "Active") {
        setFilterTodos(todos.filter((t) => !t.completed));
      }
      if (filter === "Completed") {
        setFilterTodos(todos.filter((t) => t.completed));
      }
    },
    [todos]
  );

  let addTodo = (todo) => {
    //update data at server side
    fetch("http://localhost:3001/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    //update data at client side
    setTodos((prevState) => [...prevState, todo]);
  };

  let deleteTodo = (todoId) => {
    //server
    fetch(`http://localhost:3001/todos/${todoId}`, {
      method: "DELETE",
    });
    //Client
    setTodos((prevState) => {
      return prevState.filter((todo) => {
        return todo.id !== todoId;
      });
    });
  };

  let updateTodo = (todo) => {
    //server
    fetch(`http://localhost:3001/todos/${todo.id}`, {
      method: "PATCH",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    //client
    setTodos((prevState) => {
      return prevState.map((t) => {
        if (t.id === todo.id) {
          return todo;
        }
        return t;
      });
    });
  };

  let remainingCount = todos.filter((t) => !t.completed).length;

  let checkAll = () => {
    //server
    todos.forEach((t) => {
      t.completed = true;
      updateTodo(t);
    });
    //client
    setTodos((prevState) => {
      return prevState.map((t) => {
        return { ...t, completed: true };
      });
    });
  };
  ///finidhed

  let clearCompleted = () => {
    //server
    todos.forEach((t) => {
      if (t.completed) {
        console.log(t.id);
        deleteTodo(t.id);
      }
    });
    //client
    setTodos((prevState) => {
      return prevState.filter((t) => !t.completed);
    });
  };

  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={filterTodos}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
        <CheckAllAndRemaining
          remainingCount={remainingCount}
          checkAll={checkAll}
        />
        <div className="other-buttons-container">
          <TodoFilter filterBy={filterBy} />
          <ClearCompleteBtn clearCompleted={clearCompleted} />
        </div>
      </div>
    </div>
  );
}

export default App;
//  const [isEdit, setisEdit] = useState(false);
//  const [todolist, settodolist] = useState([]);
//  const [todoTitle, setTodoTitle] = useState("");
//  const data = {
//    id: Date.now().toString(),
//    title: todoTitle,
//    completed: false,
//  };
//  const handleAdd = async (data) => {
//    const response = await fetch("http://localhost:3001/todos", {
//      method: "POST",
//      body: JSON.stringify(data),
//      headers: {
//        "Content-type": "application/json; charset=UTF-8",
//      },
//    });
//    const newData = await response.json();
//    settodolist((prevState) => [...prevState], newData);
//    setTodoTitle("");
//  };
//  const handleDelete = async (todoId) => {
//    console.log(todoId);
//    const response = await fetch(`http://localhost:3001/todos/${todoId}`, {
//      method: "DELETE",
//    });
//    settodolist((prevState) => {
//      return prevState.filter((todo) => {
//        return todo.id !== todoId;
//      });
//    });
//  };

//  const handleEdit = async (todo) => {
//    const response = await fetch(`http://localhost:3001/todos/${todo.id}`, {
//      method: "PATCH",
//    });
//    settodolist((prevState) => {
//      return prevState.map((t) => {
//        if (t.id === todo.id) {
//          return todo;
//        }
//        return t;
//      });
//    });
//  };

//  async function fetchtodolist() {
//    const response = await fetch("http://localhost:3001/todos");
//    const fetchedtodolist = await response.json();
//    settodolist(fetchedtodolist);
//  }

//  useEffect(() => {
//    fetchtodolist();
//  }, []);

//  console.log(todolist);

//  return (
//    <>
//      <div className="flex justify-center">
//        <div className="w-100 py-7 px-8 ">
//          <div className="underline text-4xl flex justify-center py-5">
//            To Do list
//          </div>
//          <div className="border-2 bg-gray-500 rounded-lg py-6 w-96">
//            <div className="flex justify-around">
//              <div className=" py-3">
//                <form>
//                  <div class="w-100 flex justify-around ">
//                    <label className="" for="message"></label>
//                    <input
//                      id="address"
//                      className="text-s font-bold appearance-none block  bg-gray-300 text-gray-700 border border-green-800 rounded py-3 px-4 mb-3 leading-tight"
//                      required
//                      placeholder="Type Here..."
//                      value={todoTitle}
//                      onChange={(e) => setTodoTitle(e.target.value)}
//                    ></input>
//                    <div className=" ml-5">
//                      <input
//                        type="submit"
//                        class="bg-blue-500 hover:bg-blue-400 text-center text-gray-700 text-s font-bold rounded py-2 px-4"
//                        value="Add"
//                        onClick={() => handleAdd(data)}
//                      />
//                    </div>
//                  </div>
//                </form>
//              </div>
//            </div>
//            {todolist.map((item) => (
//              <div className="flex justify-center items-center py-1">
//                <input
//                  id="inline-2-checkbox"
//                  type="checkbox"
//                  value="checkbox"
//                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
//                />
//                {!isEdit && (
//                  <div
//                    className="w-60 ml-2"
//                    onDoubleClick={() => {
//                      setisEdit(true);
//                    }}
//                  >
//                    {item.title}
//                  </div>
//                )}
//                {isEdit && (
//                  <form>
//                    <input
//                      type="text"
//                      className="mr-3 ml-3 text-s font-bold appearance-none block  bg-gray-300 text-gray-700 border border-green-800 rounded leading-tight "
//                      onChange={() => handleEdit(item.id)}
//                    />
//                  </form>
//                )}
//                <div className=" ml-5">
//                  <input
//                    type="submit"
//                    class="bg-slate-300 hover:bg-gray-400 text-center text-red-700 text-s font-bold rounded py- px-3"
//                    value="X"
//                    onClick={() => handleDelete(item.id)}
//                  />
//                </div>
//              </div>
//            ))}

//            <div className="flex justify-center py-2 ">
//              <div className=" py-2 ml-5">
//                <input
//                  type="submit"
//                  className="bg-green-500 hover:bg-green-400 text-center  text-s font-bold rounded py-2 px-4"
//                  value="Checked All"
//                />
//              </div>
//              <div className=" mt-2 ml-5">
//                <input
//                  type="submit"
//                  className="bg-red-500 hover:bg-red-400 text-center  text-s font-bold rounded py-2 px-4"
//                  value="Delete All"
//                />
//              </div>
//            </div>
//          </div>
//        </div>
//      </div>
//    </>
//  );
