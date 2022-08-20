import React from "react";

import { addColor } from "../store/notes/notesSlice";
import { useDispatch, useSelector } from "react-redux";

import { CirclePicker } from "react-color";

const Colors = () => {
  const dispatch = useDispatch();
  const colors = useSelector((state) => state.notes.colors);

  const handleChangeComplete = (color, event) => {
    dispatch(addColor(color.hex));
  };

  console.log(colors);

  return (
    <div>
      <CirclePicker onChangeComplete={handleChangeComplete} />
    </div>
  );
};

export default Colors;
