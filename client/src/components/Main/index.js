import React from "react";
import { isAuth } from "hoc/isAuth";
import NavBar from "../NavBar";
import SideBar from "../SideBar";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

const Dashboard = ({ children }) => (
  <Flex minHeight="100vh" height="auto">
    <Box bg="gray.100" height="auto">
      <SideBar />
    </Box>
    <Box width="100%" bg="white" flex="1" direction="column">
      <NavBar />
      <Box flex="1">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  </Flex>
);

export default isAuth(Dashboard);
