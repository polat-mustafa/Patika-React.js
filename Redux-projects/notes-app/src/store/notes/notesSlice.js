import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [
      {
        id: 1,
        title: "Note 1",
        content: "This is the first note",
        color: "#ff0000",
      },
      {
        id: 2,
        title: "Note 2",
        content: "This is the second note",
        color: "#00ff00",
      },
      {
        id: 3,
        title: "Note 3",
        content: "This is the third note",
        color: "yellow",
      },
      {
        id: 4,
        title: "Note 4",
        content: "This is the fourth note",
        color: "purple",
      },
    ],
    colors: null,
    filteredNotes: null,
  },
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    addColor: (state, action) => {
      state.colors = action.payload;
    },
    searchNotes: (state, action) => {
      state.filteredNotes = state.notes.filter((note) => {
        return note.title.toLowerCase().includes(action.payload.toLowerCase());
      });
    },
  },
});

export const { addNote, deleteNote, addColor, searchNotes } =
  notesSlice.actions;
export default notesSlice.reducer;
