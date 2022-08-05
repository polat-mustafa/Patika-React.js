import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Checkbox } from "antd";
import { toggleTodo, deleteTodo } from "../redux/todo/todoSlice";

const InActiveTodo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const filterNotCompleted = (todos) => {
    return todos.filter((todo) => todo.completed === true);
  };

  const toogle = (id) => {
    dispatch(toggleTodo(id));
  };
  const deleteTodos = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      {filterNotCompleted(todos).map((todo, index) => {
        return (
          <div key={index} id="inActive">
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

export default InActiveTodo;
