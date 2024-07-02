import React from "react";
import { Link } from "react-router-dom";
import * as path from "constants/routes";
import { Box, Button, Center, Heading, Stack } from "@chakra-ui/react";
const Home = () => (
  <Box
    className="App"
    height="100vh"
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <Center flexDirection="column">
      <Heading as="h1" mb={8}>
        Home Page
      </Heading>
      <Stack direction="column" spacing={4} align="center">
        {" "}
        <Link to={path.SIGN_IN}>
          <Button width="150px" colorScheme="purple">
            Login
          </Button>
        </Link>{" "}
        <Link to={path.SIGN_UP}>
          <Button width="150px" colorScheme="purple">
            Signup
          </Button>
        </Link>
        <Link to={path.DASHBOARD}>
          <Button width="150px" colorScheme="purple">
            Dashboard
          </Button>
        </Link>
      </Stack>
    </Center>
  </Box>
);
export default Home;
