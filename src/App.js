import React from "react";
import TodoListFC from "./components/Todo List FunctionalComponent/TodoListFC";
import TodoListCC from "./components/Todo List Class Component/TodoListCC";
const App = () => {
  return (
    <React.Fragment>
      <TodoListFC />
      <TodoListCC />
    </React.Fragment>
  );
};

export default App;
