import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../redux/actions";
import Task from "./Task";

const ListTask = () => {
  const dispatch = useDispatch();
  const { tasks, filter } = useSelector((state) => state);

  const filtered = tasks.filter((task) => {
    if (filter === "done") return task.isDone;
    if (filter === "not") return !task.isDone;
    return true;
  });

  return (
    <div>
      <div style={{ marginBottom: "15px", display: "flex", gap: "10px" }}>
        <button onClick={() => dispatch(setFilter("all"))}>All</button>
        <button onClick={() => dispatch(setFilter("done"))}>Done</button>
        <button onClick={() => dispatch(setFilter("not"))}>Not Done</button>
      </div>

      {filtered.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
