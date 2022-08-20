import { Input } from "@chakra-ui/react";
import React from "react";

import { useDispatch } from "react-redux";
import { searchNotes } from "../store/notes/notesSlice";

const Search = () => {
  const dispatch = useDispatch();

  const handleSearch = (event) => dispatch(searchNotes(event.target.value));

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        backgroundColor: "lavender",
        padding: "20px",
      }}
    >
      <h4
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          fontFamily: "Arial",
        }}
      >
        Search a note
      </h4>

      <Input
        placeholder="Search"
        style={{
          width: "100%",
          height: "50px",
          borderRadius: "20px",
          borderColor: "gray.500",
          borderWidth: "1.5px",
          color: "black",
          fontSize: "1rem",
          fontWeight: "bold",
          fontStyle: "italic",
          padding: "10px",
          margin: "10px",
        }}
        borderRadius={20}
        borderColor={"gray.500"}
        _placeholder={{ color: "gray.500" }}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
