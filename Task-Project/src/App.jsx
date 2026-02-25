import TaskManager from "./components/TaskManager";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        🛍️ Task Manager
      </h1>
      <TaskManager />
    </div>
  );
}

export default App;