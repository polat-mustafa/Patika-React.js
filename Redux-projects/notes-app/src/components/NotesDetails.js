import React from "react";
import { useDispatch } from "react-redux";
import { deleteNote } from "../store/notes/notesSlice";

import { AiOutlineCloseCircle } from "react-icons/ai";
const NotesDetails = ({ note }) => {
  const dispatch = useDispatch();

  const deleteNoteHandler = (id) => {
    dispatch(deleteNote(id));
  };

  return (
    <div
      style={{
        backgroundColor: note.color,
        borderRadius: "20px",
        padding: "20px",
        margin: "10px",
        height: "200px",
        width: "300px",
        textAlign: "center",
        color: "black",
        fontSize: "20px",
        fontWeight: "bold",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        {" "}
        <AiOutlineCloseCircle
          onClick={() => deleteNoteHandler(note.id)}
          style={{ cursor: "pointer" }}
        />
      </div>
      <h1>{note.title}</h1>
      <hr
        style={{
          border: "1px solid black",
        }}
      />
      <p>{note.content}</p>
    </div>
  );
};

export default NotesDetails;
