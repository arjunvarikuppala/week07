function TaskItem({ task, toggleComplete, deleteTask }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
      <img
        src={task.image || "https://via.placeholder.com/300"}
        alt={task.title}
        className="w-full h-40 object-cover rounded"
      />

      <h2
        className={`text-xl font-bold mt-3 ${
          task.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {task.title}
      </h2>

      <p className="text-sm text-gray-600">{task.brand}</p>
      <p className="text-sm mt-2">{task.description}</p>
      <p className="font-semibold mt-2">₹{task.price}</p>

      <p
        className={`mt-2 text-sm font-semibold ${
          task.priority === "High"
            ? "text-red-500"
            : task.priority === "Medium"
            ? "text-yellow-500"
            : "text-green-500"
        }`}
      >
        Priority: {task.priority}
      </p>

      <div className="flex justify-between mt-4">
        <button
          onClick={() => toggleComplete(task.id)}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
        >
          {task.completed ? "Undo" : "Complete"}
        </button>

        <button
          onClick={() => deleteTask(task.id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;