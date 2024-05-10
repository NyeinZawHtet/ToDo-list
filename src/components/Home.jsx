// import { useEffect, useState } from "react";
// export default function Home() {
//   const [isEdit, setisEdit] = useState(false);
//   const [todolist, settodolist] = useState([]);
//   const [todoTitle, setTodoTitle] = useState("");
//   const data = {
//     id: Date.now().toString(),
//     title: todoTitle,
//     completed: false,
//   };
//   const handleAdd = async (data) => {
//     const response = await fetch("http://localhost:3001/todos", {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     });
//     const newData = await response.json();
//     settodolist((prevState) => [...prevState], newData);
//     setTodoTitle("");
//   };
//   const handleDelete = async (todoId) => {
//     console.log(todoId);
//     const response = await fetch(`http://localhost:3001/todos/${todoId}`, {
//       method: "DELETE",
//     });
//     settodolist((prevState) => {
//       return prevState.filter((todo) => {
//         return todo.id !== todoId;
//       });
//     });
//   };

//   const handleEdit = async (todo) => {
//     const response = await fetch(`http://localhost:3001/todos/${todo.id}`, {
//       method: "PATCH",
//     });
//     settodolist((prevState) => {
//       return prevState.map((t) => {
//         if (t.id === todo.id) {
//           return todo;
//         }
//         return t;
//       });
//     });
//   };

//   async function fetchtodolist() {
//     const response = await fetch("http://localhost:3001/todos");
//     const fetchedtodolist = await response.json();
//     settodolist(fetchedtodolist);
//   }

//   useEffect(() => {
//     fetchtodolist();
//   }, []);

//   console.log(todolist);
//   return (
//     <>
//       {/* <div>
//         <div className="text-center text-4xl text-bold bg-gray-900 text-white py-3">
//           Dashboard
//         </div>
//         <div className="flex  justify-around text-2xl bg-gray-700 text-white py-7">
//           <div className="flex flex-col ">
//             <div className="text-3xl py-2">Notes</div>
//             <div>
//               <button
//                 type="button"
//                 className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//               >
//                 <i className="fa-solid fa-award"></i> Awards
//               </button>
//             </div>
//             <div>
//               <button
//                 type="button"
//                 className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//               >
//                 <i className="fa-solid fa-list-check"></i> Tasks
//               </button>
//             </div>
//             <div>
//               <button
//                 type="button"
//                 className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//               >
//                 <i class="fa-solid fa-clipboard"></i> Notes
//               </button>
//             </div>
//             <div>
//               <button
//                 type="button"
//                 class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//               >
//                 <i class="fa-solid fa-calendar-week"></i> Week
//               </button>
//             </div>
//           </div>
//           <div>
//             <div className="py-2">Work</div>
//             <button
//               type="button"
//               class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//             >
//               <i class="fa-solid fa-user-check"></i> Client
//             </button>
//             <div>
//               <button
//                 type="button"
//                 class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//               >
//                 <i class="fa-solid fa-diagram-project"></i> Project
//               </button>
//               <div>
//                 <button
//                   type="button"
//                   class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//                 >
//                   <i class="fa-solid fa-pencil"></i> Create
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div>
//             <div className="py-2">Personal</div>
//             <div>
//               <button
//                 type="button"
//                 class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//               >
//                 <i class="fa-solid fa-chart-simple"></i> Finances
//               </button>
//             </div>
//             <div>
//               <button
//                 type="button"
//                 class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//               >
//                 <i class="fa-solid fa-heart"></i> Health
//               </button>
//             </div>
//             <div>
//               <button
//                 type="button"
//                 class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//               >
//                 <i class="fa-solid fa-bolt"></i> Improve
//               </button>
//             </div>
//             <div>
//               <button
//                 type="button"
//                 class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//               >
//                 <i class="fa-solid fa-cart-shopping"></i> Purchase
//               </button>
//             </div>
//           </div>
//           <div>
//             <div className="py-2">Life</div>
//             <div>
//               <button
//                 type="button"
//                 class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//               >
//                 <i class="fa-solid fa-book-open"></i> Books
//               </button>
//             </div>
//             <div>
//               <button
//                 type="button"
//                 class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//               >
//                 <i class="fa-solid fa-route"></i> Travel
//               </button>
//             </div>
//             <div>
//               <button
//                 type="button"
//                 class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//               >
//                 <i class="fa-solid fa-clock"></i> Time
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="text-4xl text-white bg-gray-900 text-center py-4 flex flex-col">
//         <div>To Do list</div>
//       </div>
//       <div className="bg-gray-500 py-9 flex justify-around">
//         <div className="flex flex-col">
//           <div className="text-2xl text-white py-2 ml-1">Long Time Goals</div>
//           <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
//             <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
//               <div class="flex items-center ps-3">
//                 <input
//                   id="vue-checkbox"
//                   type="checkbox"
//                   value=""
//                   class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
//                 />
//                 <label
//                   for="vue-checkbox"
//                   class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                 >
//                   Buy a BMW
//                 </label>
//               </div>
//             </li>
//             <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
//               <div class="flex items-center ps-3">
//                 <input
//                   id="react-checkbox"
//                   type="checkbox"
//                   value=""
//                   class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
//                 />
//                 <label
//                   for="react-checkbox"
//                   class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                 >
//                   Buy a new house
//                 </label>
//               </div>
//             </li>
//             <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
//               <div class="flex items-center ps-3">
//                 <input
//                   id="angular-checkbox"
//                   type="checkbox"
//                   value=""
//                   class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
//                 />
//                 <label
//                   for="angular-checkbox"
//                   class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                 >
//                   Find a new job
//                 </label>
//               </div>
//             </li>
//             <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
//               <div class="flex items-center ps-3">
//                 <input
//                   id="laravel-checkbox"
//                   type="checkbox"
//                   value=""
//                   class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
//                 />
//                 <label
//                   for="laravel-checkbox"
//                   class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                 >
//                   Traval to NewYork
//                 </label>
//               </div>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <div className="text-white text-2xl py-2">Daily Routines</div>
//           <div class="flex items-center mb-4">
//             <input
//               id="default-checkbox"
//               type="checkbox"
//               value=""
//               class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//             />
//             <label
//               for="default-checkbox"
//               class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//             >
//               Taking shower
//             </label>
//           </div>
//           <div class="flex items-center mb-4">
//             <input
//               id="default-checkbox"
//               type="checkbox"
//               value=""
//               class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//             />
//             <label
//               for="default-checkbox"
//               class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//             >
//               Cleaning house
//             </label>
//           </div>
//           <div class="flex items-center mb-4">
//             <input
//               id="default-checkbox"
//               type="checkbox"
//               value=""
//               class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//             />
//             <label
//               for="default-checkbox"
//               class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//             >
//               Feed to pet
//             </label>
//           </div>
//           <div class="flex items-center mb-4">
//             <input
//               id="default-checkbox"
//               type="checkbox"
//               value=""
//               class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//             />
//             <label
//               for="default-checkbox"
//               class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//             >
//               Workout
//             </label>
//           </div>
//           <div class="flex items-center mb-4">
//             <input
//               id="default-checkbox"
//               type="checkbox"
//               value=""
//               class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//             />
//             <label
//               for="default-checkbox"
//               class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//             >
//               To study
//             </label>
//           </div>
//         </div>
//       </div>
//       <div className="text-4xl bg-gray-500 text-center text-white">
//         To post my daily activities{" "}
//       </div>
//       <div className="bg-gray-500 py-4 ">
//         <form>
//           <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
//             <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
//               <label for="comment" class="sr-only">
//                 Your comment
//               </label>
//               <textarea
//                 id="comment"
//                 rows="4"
//                 class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
//                 placeholder="Write a comment..."
//                 required
//               ></textarea>
//             </div>
//             <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
//               <button
//                 type="submit"
//                 class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
//               >
//                 Post comment
//               </button>
//               <div class="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
//                 <button
//                   type="button"
//                   class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
//                 >
//                   <svg
//                     class="w-4 h-4"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 12 20"
//                   >
//                     <path
//                       stroke="currentColor"
//                       stroke-linejoin="round"
//                       stroke-width="2"
//                       d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
//                     />
//                   </svg>
//                   <span class="sr-only">Attach file</span>
//                 </button>
//                 <button
//                   type="button"
//                   class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
//                 >
//                   <svg
//                     class="w-4 h-4"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="currentColor"
//                     viewBox="0 0 16 20"
//                   >
//                     <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
//                   </svg>
//                   <span class="sr-only">Set location</span>
//                 </button>
//                 <button
//                   type="button"
//                   class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
//                 >
//                   <svg
//                     class="w-4 h-4"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="currentColor"
//                     viewBox="0 0 20 18"
//                   >
//                     <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
//                   </svg>
//                   <span class="sr-only">Upload image</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div> */}
//       <div className="flex justify-center text-3xl ">
//         <div className="underline ...">To Do List</div>
//       </div>
//       <div className="flex justify-center">
//         <div class="flex justify-center mt-4 mr-16">
//           <label
//             for="base-input"
//             class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//             Base input
//           </label>
//           <input
//             type="text"
//             id="base-input"
//             class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//           />
//         </div>
//         <div className="mt-5 mr-6">
//           <button
//             type="button"
//             class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
//           >
//             Add
//           </button>
//         </div>
//       </div>
//       <div className="flex justify-center">
//         <div className="w-100 py-7 px-8 ">
//           <div className="underline text-4xl flex justify-center py-5">
//             To Do list
//           </div>
//           <div className="border-2 bg-gray-500 rounded-lg py-6 w-96">
//             <div className="flex justify-around">
//               <div className=" py-3">
//                 <form>
//                   <div class="w-100 flex justify-around ">
//                     <label className="" for="message"></label>
//                     <input
//                       id="address"
//                       className="text-s font-bold appearance-none block  bg-gray-300 text-gray-700 border border-green-800 rounded py-3 px-4 mb-3 leading-tight"
//                       required
//                       placeholder="Type Here..."
//                       value={todoTitle}
//                       onChange={(e) => setTodoTitle(e.target.value)}
//                     ></input>
//                     <div className=" ml-5">
//                       <input
//                         type="submit"
//                         class="bg-blue-500 hover:bg-blue-400 text-center text-gray-700 text-s font-bold rounded py-2 px-4"
//                         value="Add"
//                         onClick={() => handleAdd(data)}
//                       />
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>

//             {todolist.map((item) => (
//               <div className="flex justify-center items-center py-1">
//                 <input
//                   id="inline-2-checkbox"
//                   type="checkbox"
//                   value="checkbox"
//                   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
//                 />
//                 {!isEdit && (
//                   <div
//                     className="w-60 ml-2"
//                     onDoubleClick={() => {
//                       setisEdit(true);
//                     }}
//                   >
//                     {item.title}
//                   </div>
//                 )}
//                 {isEdit && (
//                   <form>
//                     <input
//                       type="text"
//                       className="mr-3 ml-3 text-s font-bold appearance-none block  bg-gray-300 text-gray-700 border border-green-800 rounded leading-tight "
//                       onChange={() => handleEdit(item.id)}
//                     />
//                   </form>
//                 )}
//                 {/* <label
//                 for="inline-2-checkbox"
//                 className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//               >
//                 To do list
//               </label> */}
//                 {/* <div className=" ml-5">
//                   <input
//                     type="submit"
//                     class="bg-slate-300 hover:bg-gray-400 text-center text-gray-700 text-s font-bold rounded px-3"
//                     value="Edit"
//                     onClick={() => handleEdit(item.id)}
//                   />
//                 </div> */}
//                 <div className=" ml-5">
//                   <input
//                     type="submit"
//                     class="bg-slate-300 hover:bg-gray-400 text-center text-red-700 text-s font-bold rounded py- px-3"
//                     value="X"
//                     onClick={() => handleDelete(item.id)}
//                   />
//                 </div>
//               </div>
//             ))}

//             <div className="flex justify-center py-2 ">
//               <div className=" py-2 ml-5">
//                 <input
//                   type="submit"
//                   className="bg-green-500 hover:bg-green-400 text-center  text-s font-bold rounded py-2 px-4"
//                   value="Checked All"
//                 />
//               </div>
//               <div className=" mt-2 ml-5">
//                 <input
//                   type="submit"
//                   className="bg-red-500 hover:bg-red-400 text-center  text-s font-bold rounded py-2 px-4"
//                   value="Delete All"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
