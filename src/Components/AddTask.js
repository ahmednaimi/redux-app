import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";

const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim() !== "") {
      dispatch(addTask(text));
      setText("");
    }
  };

  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add task..."
        style={{ flex: 1, padding: "8px" }}
      />
      <button onClick={handleAdd} style={{ padding: "8px 15px" }}>
        Add
      </button>
    </div>
  );
};

export default AddTask;
