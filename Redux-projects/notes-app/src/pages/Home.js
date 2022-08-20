import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

import InputNotes from "../components/InputNotes";
import Notes from "../components/Notes";

const Home = () => {
  return (
    <>
      <Grid templateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem colSpan={2}>
          <InputNotes />
        </GridItem>
        <GridItem colStart={3} colEnd={6}>
          <Notes />
        </GridItem>
      </Grid>
    </>
  );
};

export default Home;
