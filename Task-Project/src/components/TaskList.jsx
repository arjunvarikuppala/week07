import TaskItem from "./TaskItem";

function TaskList({ tasks, toggleComplete, deleteTask }) {
  if (tasks.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-6">
        No tasks added yet
      </p>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-6 mt-6">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;