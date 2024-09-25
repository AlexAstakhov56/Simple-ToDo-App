import Check from "./Check";
import { IoTrashOutline } from "react-icons/io5";

export default function TodoItem({ todo, changeTodo, removeTodo }) {
  return (
    <div className="flex items-center justify-between mb-4 rounded-2xl bg-gray-800 p-5 w-full">
      <button className="flex items-center" onClick={() => changeTodo(todo.id)}>
        <Check isCompleted={todo.isCompleted} />
        <span className={todo.isCompleted ? "line-through" : ""}>
          {todo.title}
        </span>
      </button>
      <button onClick={() => removeTodo(todo.id)}>
        <IoTrashOutline
          size={22}
          className="text-pink-400 transition-colors duration-300 hover:text-pink-600"
        />
      </button>
    </div>
  );
}
