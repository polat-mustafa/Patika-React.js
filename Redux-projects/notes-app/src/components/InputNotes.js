import { useState } from "react";
import { Box, Button, Grid, Input, Textarea } from "@chakra-ui/react";
import Colors from "./Colors";
import Search from "./Search";

import { useSelector, useDispatch } from "react-redux";
import { addNote } from "../store/notes/notesSlice";

import { FcSurvey } from "react-icons/fc";

const InputNotes = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.notes);
  const colors = useSelector((state) => state.notes.colors);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleClick = () => {
    dispatch(
      addNote({
        id: notes.length + 1,
        title: title,
        content: content,
        color: colors,
      })
    );

    setTitle("");
    setContent("");
  };

  return (
    <Grid templateRows="repeat(2, 1fr)" gap={4}>
      <Box
        w={"100%"}
        h={"100%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        backgroundColor={"lavender"}
        borderRadius={"20px"}
        padding={2}
        margin={3}
        color={"black"}
        fontFamily={"'Roboto', sans-serif"}
        fontSize={"2rem"}
        fontStyle={"italic"}
        fontWeight={"bold"}
      >
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          Notes App <FcSurvey />
        </Box>
        <Input
          placeholder="Please enter a title"
          borderRadius={20}
          borderColor={"gray.500"}
          borderWidth={1.5}
          color={"black"}
          fontSize={"1rem"}
          fontWeight={"bold"}
          fontStyle={"italic"}
          _placeholder={{ color: "gray.500" }}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          placeholder="Add a note here"
          borderRadius={20}
          borderColor={"gray.500"}
          borderWidth={1.5}
          color={"black"}
          fontSize={"1rem"}
          fontWeight={"bold"}
          fontStyle={"italic"}
          _placeholder={{ color: "gray.500" }}
          padding={2}
          margin={3}
          mb={5}
          onChange={(e) => setContent(e.target.value)}
        />
        <Colors />
        <Button
          colorScheme="teal"
          variant="solid"
          mt={5}
          onClick={handleClick}
          style={{ borderRadius: "15px" }}
        >
          Add note
        </Button>
      </Box>
      <Box
        w={"100%"}
        h={"100"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        backgroundColor={"lavender"}
        borderRadius={"20px"}
        padding={2}
        margin={3}
        color={"black"}
        fontFamily={"'Roboto', sans-serif"}
        fontSize={"2rem"}
        fontStyle={"italic"}
        fontWeight={"bold"}
      >
        <Search />
      </Box>
    </Grid>
  );
};

export default InputNotes;
