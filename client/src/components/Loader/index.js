import React from "react";
import { Box, Spinner, Heading } from "@chakra-ui/react";

const Loader = ({ styles }) => (
  <Box textAlign="center" style={styles}>
    <Spinner size="xl" color="teal.500" />
    <Heading size="md" mt={4}>
      Loading...
    </Heading>
  </Box>
);

export default Loader;
