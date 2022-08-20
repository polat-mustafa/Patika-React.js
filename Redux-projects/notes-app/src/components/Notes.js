import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import NotesDetails from "../components/NotesDetails";
import { useSelector } from "react-redux";

const Notes = () => {
  const notes = useSelector((state) => state.notes.notes);
  const filteredNotes = useSelector((state) => state.notes.filteredNotes);

  return (
    <div>
      <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))">
        {filteredNotes
          ? filteredNotes.map((note) => (
              <GridItem key={note.id}>
                <NotesDetails note={note} />
              </GridItem>
            ))
          : notes.map((note) => (
              <GridItem key={note.id}>
                <NotesDetails note={note} />
              </GridItem>
            ))}
      </Grid>
    </div>
  );
};

export default Notes;
