import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const PageNotFound = () => (
  <Box
    textAlign="center"
    py={10}
    px={6}
    boxShadow="md"
    borderRadius="lg"
    bg="gray.100"
  >
    <Heading as="h1" size="2xl" mb={4}>
      Page Not Found :(
    </Heading>
  </Box>
);

export default PageNotFound;
