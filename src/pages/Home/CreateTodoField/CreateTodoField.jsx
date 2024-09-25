import { useState } from "react";

export default function CreateTodoField({ addTodo }) {
  const [title, setTitle] = useState("");

  return (
    <div className="flex items-center justify-between mb-4 rounded-2xl border-2 border-gray-800 px-5 py-3 mt-20 w-full">
      <input
        type="text"
        className="bg-transparent w-full border-none outline-none"
        placeholder="Add a task and press enter:"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => {
          if (e.key !== "Enter") return;
          addTodo(title);
          setTitle("");
        }}
      />
    </div>
  );
}
