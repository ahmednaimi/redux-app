import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

import AddTask from "./Components/AddTask";
import ListTask from "./Components/ListTask";

const App = () => {
  return (
    <Provider store={store}>
      <div style={{ maxWidth: "600px", margin: "40px auto" }}>
        <h1 style={{ textAlign: "center" }}>Redux ToDo App</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
};

export default App;
