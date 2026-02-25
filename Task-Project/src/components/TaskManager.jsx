import { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";

function TaskManager() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <div className="max-w-6xl mx-auto">
      <AddTaskForm addTask={addTask} />

      <div className="flex justify-between mt-6 mb-4 bg-white p-4 rounded-lg shadow">
        <p className="font-semibold">Total Tasks: {tasks.length}</p>
        <p className="font-semibold text-green-600">
          Completed: {completedCount}
        </p>
      </div>

      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default TaskManager;