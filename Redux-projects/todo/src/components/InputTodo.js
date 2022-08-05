import React from "react";
import { Input } from "antd";
import { addTodo } from "../redux/todo/todoSlice";
import { useDispatch, useSelector } from "react-redux";

const InputTodo = () => {
  const todos = useSelector((state) => state.todo.todos);
  const [value, setValue] = React.useState({
    id: todos.length + 1,
    text: "",
    completed: false,
  });
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(addTodo(value));
    setValue("");
  };

  return (
    <Input
      placeholder="Add Todo"
      onPressEnter={onClick}
      onChange={(e) =>
        setValue({
          ...value,
          text: e.target.value,
        })
      }
      value={value.text}
    />
  );
};

export default InputTodo;
