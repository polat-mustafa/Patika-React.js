import React from "react";
import { Divider } from "antd";
import { useNavigate } from "react-router-dom";
import InputTodo from "./InputTodo";
import InActiveTodo from "./InActiveTodo";
import ActiveTodo from "./ActiveTodo";

const Body = () => {
  const navigate = useNavigate();

  const activeRoute = () => {
    navigate("ActiveTodo");
  };

  const inactiveRoute = () => {
    navigate("InactiveTodo");
  };

  return (
    <div>
      <Divider orientation="left">Todo List</Divider>
      <InputTodo />
      <button onClick={activeRoute}>Show All</button>
      <button onClick={inactiveRoute}>Completed</button>
      {document.location.pathname === "/ActiveTodo" ? (
        <ActiveTodo />
      ) : (
        <InActiveTodo />
      )}
    </div>
  );
};

export default Body;
