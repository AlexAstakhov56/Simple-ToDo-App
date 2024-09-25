import { useEffect, useState } from "react";
import TodoItem from "./Item/TodoItem";
import CreateTodoField from "./CreateTodoField/CreateTodoField";

const data = [
  {
    id: "nvsknvkzc",
    title: "Learn React and TypeScript",
    isCompleted: false,
  },
  {
    id: "xlkvsofso",
    title: "Learn Next.js and Redux",
    isCompleted: false,
  },
  {
    id: "alskcmaodn",
    title: "Find a job",
    isCompleted: false,
  },
];

export default function Home() {
  const [todos, setTodos] = useState(data);

  useEffect(() => {
    if (localStorage.getItem("todoList")) {
      setTodos(JSON.parse(localStorage.getItem("todoList")));
    }
  }, [todos]);

  function changeTodo(id) {
    const copy = [...todos];
    const curTodo = copy.filter((t) => t.id === id)[0];
    curTodo.isCompleted = !curTodo.isCompleted;
    setTodos(copy);
    localStorage.setItem("todoList", JSON.stringify(copy));
  }

  function removeTodo(id) {
    const newTodo = [...todos].filter((t) => t.id !== id);
    setTodos(newTodo);
    localStorage.setItem("todoList", JSON.stringify(newTodo));
  }

  function addTodo(title) {
    const newTodo = {
      id: new Date(),
      title,
      isCompleted: false,
    };
    setTodos([newTodo, ...todos]);
    localStorage.setItem("todoList", JSON.stringify([newTodo, ...todos]));
  }

  return (
    <div className=" text-white w-4/5 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-10">ToDo for junior</h1>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <CreateTodoField addTodo={addTodo} />
    </div>
  );
}
