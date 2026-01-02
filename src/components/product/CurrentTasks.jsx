import { useState } from "react";
import { Plus, Check } from "lucide-react";

export default function CurrentTasks() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Unable to upload file",
      date: "August 05",
      completed: false,
    },
    {
      id: 2,
      title: "Error in database query",
      date: "July 15",
      completed: true,
    },
    {
      id: 3,
      title: "Authentication problem",
      date: "September 20",
      completed: false,
    },
    {
      id: 4,
      title: "Bug in search functionality",
      date: "September 05",
      completed: false,
    },
    {
      id: 5,
      title: "Compatibility issue with Firefox",
      date: "July 25",
      completed: true,
    },
    {
      id: 6,
      title: "UI alignment broken on mobile",
      date: "October 02",
      completed: false,
    },
    {
      id: 7,
      title: "Dashboard loading slow",
      date: "October 04",
      completed: false,
    },
  ]);

  const [newTask, setNewTask] = useState("");

  // toggle complete + move completed to bottom
  const toggleTask = (id) => {
    setTasks((prev) => {
      const updated = prev.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      );

      return [
        ...updated.filter((t) => !t.completed),
        ...updated.filter((t) => t.completed),
      ];
    });
  };

  // add task
  const addTask = () => {
    if (!newTask.trim()) return;

    setTasks((prev) => [
      {
        id: Date.now(),
        title: newTask,
        date: new Date().toLocaleDateString("en-US", {
          month: "long",
          day: "2-digit",
        }),
        completed: false,
      },
      ...prev,
    ]);

    setNewTask("");
  };

  return (
    <div className="bg-[#1c1c1c] rounded-2xl p-6 h-full flex flex-col">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Current tasks</h3>

        <button
          onClick={addTask}
          className="flex items-center gap-2 bg-[#2a2a2a] px-3 py-1.5 rounded-lg text-sm hover:bg-[#333] transition"
        >
          <Plus size={16} />
          Add task
        </button>
      </div>

      {/* INPUT */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
          className="w-full bg-[#262626] rounded-lg px-4 py-2 text-sm outline-none placeholder:text-gray-500"
        />
      </div>

      {/* TASK LIST (MAX 5 TASKS VISIBLE) */}
      <ul
        className="
          space-y-4
          overflow-y-auto
          pr-1
        "
        style={{ maxHeight: "260px" }} // 👈 approx height for 5 tasks
      >
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-start justify-between gap-4"
          >
            {/* LEFT */}
            <div className="flex items-start gap-4">
              {/* CHECKBOX */}
              <button
                onClick={() => toggleTask(task.id)}
                className={`h-5 w-5 rounded-full border-2 flex items-center justify-center mt-1
                  ${
                    task.completed
                      ? "bg-blue-500 border-blue-500"
                      : "border-gray-500"
                  }
                `}
              >
                {task.completed && (
                  <Check size={14} className="text-white" />
                )}
              </button>

              {/* TEXT */}
              <div>
                <p
                  className={`text-sm font-medium ${
                    task.completed
                      ? "line-through text-gray-500"
                      : ""
                  }`}
                >
                  {task.title}
                </p>
                <span className="text-xs text-gray-400">
                  {task.date}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
