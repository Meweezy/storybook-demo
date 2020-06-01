import React from "react";
import TodoContainer from "../TodoContainer";

export default {
  title: "TodoContainer",
  component: TodoContainer,
};

export const NormalTodoContainer = () => (
  <TodoContainer todos={["Grocery Shopping", "Go for a Run", "Study REACT"]} />
);
