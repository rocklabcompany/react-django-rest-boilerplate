import React, { useRef, useState } from "react";

import { DASHBOARD, PROFILE, TASKS } from "constants/routes";

import { logout } from "api/queries/index";

import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const targetRef = useRef(null);
  const handleChange = () => {
    setOpen((prevState) => !prevState);
  };
  const handleLogout = () => {
    logout()
      .then(() => {
        localStorage.removeItem("token");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Flex
      as="nav"
      p={4}
      bg="gray.100"
      align="center"
      justify="space-between"
      boxShadow="md"
    >
      <Link to="/" fontWeight="bold">
        Landing
      </Link>
      <Flex display={{ base: "none", md: "flex" }} align="center">
        <Stack flexDirection={"row"} spacing={5}>
          <Link to={DASHBOARD} mx={2}>
            Home
          </Link>
          <Link to={PROFILE} mx={2}>
            Profile
          </Link>
          <Link to={TASKS} mx={2}>
            Tasks
          </Link>
        </Stack>
      </Flex>
      <Menu isOpen={open}>
        <MenuButton as={Button} ref={targetRef} onClick={handleChange}>
          User
        </MenuButton>
        <MenuList>
          <MenuItem as={Link} to={TASKS}>
            Tasks
          </MenuItem>
          <MenuItem onClick={handleLogout}>Log out</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
export default NavBar;
