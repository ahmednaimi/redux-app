import React, { useState } from "react";
import AddTask from "./AddTask";
import ListTask from "./ListTask";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all"); // all, done, not

  // Add a new task
  const addTask = (description) => {
    const newTask = {
      id: Date.now(),
      description,
      isDone: false,
    };
    setTasks([...tasks, newTask]);
  };

  // Toggle task done status
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  // Edit task description
  const editTask = (id, newDescription) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, description: newDescription } : task
      )
    );
  };

  // Filter tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === "done") return task.isDone;
    if (filter === "not") return !task.isDone;
    return true;
  });

  return (
    <div className="App" style={{ padding: "2rem" }}>
      <h1>Todo App</h1>
      <AddTask addTask={addTask} />
      <div style={{ margin: "1rem 0" }}>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("done")}>Done</button>
        <button onClick={() => setFilter("not")}>Not Done</button>
      </div>
      <ListTask
        tasks={filteredTasks}
        toggleTask={toggleTask}
        editTask={editTask}
      />
    </div>
  );
}

export default App;

