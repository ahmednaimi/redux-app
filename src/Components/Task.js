import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTask, editTask } from "../redux/actions";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(task.description);

  const saveEdit = () => {
    dispatch(editTask(task.id, newText));
    setEditing(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: "#eee",
        padding: "10px",
        borderRadius: "6px",
        marginBottom: "10px"
      }}
    >
      {editing ? (
        <input value={newText} onChange={(e) => setNewText(e.target.value)} />
      ) : (
        <span style={{ textDecoration: task.isDone ? "line-through" : "none" }}>
          {task.description}
        </span>
      )}

      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => dispatch(toggleTask(task.id))}>
          {task.isDone ? "Undo" : "Done"}
        </button>

        {editing ? (
          <button onClick={saveEdit}>Save</button>
        ) : (
          <button onClick={() => setEditing(true)}>Edit</button>
        )}
      </div>
    </div>
  );
};

export default Task;
