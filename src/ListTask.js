import React from "react";
import Task from "./Task";

function ListTask({ tasks, toggleTask, editTask }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks found</p>
      ) : (
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            editTask={editTask}
          />
        ))
      )}
    </div>
  );
}

export default ListTask;
