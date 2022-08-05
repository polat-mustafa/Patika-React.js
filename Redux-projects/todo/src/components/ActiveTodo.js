import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Checkbox } from "antd";
import { toggleTodo, deleteTodo } from "../redux/todo/todoSlice";

const ActiveTodo = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todo.todos);

  const toogle = (id) => {
    dispatch(toggleTodo(id));
  };
  const deleteTodos = (id) => {
    dispatch(deleteTodo(id));
  };

  console.log(todos);
  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <div key={index}>
            <Checkbox
              checked={todo.completed}
              onChange={() => {
                toogle(index);
              }}
            />
            {todo.text}
            <button
              onClick={() => {
                deleteTodos(todo.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ActiveTodo;
