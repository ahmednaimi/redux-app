import React, { useState } from "react";

function Task({ task, toggleTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleEdit = () => {
    editTask(task.id, newDescription);
    setIsEditing(false);
  };

  return (
    <div
      style={{
        margin: "0.5rem 0",
        padding: "0.5rem",
        border: "1px solid #ccc",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {isEditing ? (
        <input
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
      ) : (
        <span
          style={{
            textDecoration: task.isDone ? "line-through" : "none",
            cursor: "pointer",
          }}
          onClick={() => toggleTask(task.id)}
        >
          {task.description}
        </span>
      )}

      <div>
        {isEditing ? (
          <button onClick={handleEdit}>Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
      </div>
    </div>
  );
}

export default Task;
