import React from "react";
import { Link, NavLink } from "react-router-dom";
import { DASHBOARD, PROFILE, TASKS } from "constants/routes";

import logo from "assets/logo.svg";
import { Box, List, Image, ListItem, Icon } from "@chakra-ui/react";
import { DragHandleIcon, EditIcon, HamburgerIcon } from "@chakra-ui/icons";

const Sidebar = () => (
  <Box bg="gray.100" p={4}>
    <Link href={DASHBOARD} className="logo-wrapper waves-effect" to={DASHBOARD}>
      <Image alt="Logo" src={logo} mb={6} />
    </Link>
    <List spacing={4}>
      <ListItem>
        <NavLink exact to={DASHBOARD} activeClassName="activeClass">
          <Box
            as="span"
            display="flex"
            alignItems="center"
            p={2}
            borderRadius="md"
            _hover={{ bg: "teal.500", color: "white" }}
          >
            <Icon as={DragHandleIcon} mr={3} />
            Dashboard
          </Box>
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to={PROFILE} activeClassName="activeClass">
          <Box
            as="span"
            display="flex"
            alignItems="center"
            p={2}
            borderRadius="md"
            _hover={{ bg: "teal.500", color: "white" }}
          >
            <Icon as={EditIcon} mr={3} />
            Profile
          </Box>
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to={TASKS} activeClassName="activeClass">
          <Box
            as="span"
            display="flex"
            alignItems="center"
            p={2}
            borderRadius="md"
            _hover={{ bg: "teal.500", color: "white" }}
          >
            <Icon as={HamburgerIcon} mr={3} /> Tasks
          </Box>
        </NavLink>
      </ListItem>
    </List>
  </Box>
);

export default Sidebar;
