import React from "react";
import {
  Box,
  Button,
  Link,
  Divider,
  Text,
  Flex,
  Center,
} from "@chakra-ui/react";

const Footer = () => (
  <Box bg="gray.100" color="white" py={8} px={4}>
    <Center>
      <Button
        colorScheme="purple"
        variant="outline"
        color="black"
        mr={4}
        as={Link}
        target="_blank"
      >
        Download
      </Button>
      <Button
        colorScheme="purple"
        variant="outline"
        color="black"
        as={Link}
        target="_blank"
      >
        Start free tutorial
      </Button>
    </Center>
    <Divider my={4} borderColor="black" />
    <Flex justify="center"></Flex>
    <Text mt={4} textAlign="center" color="black" fontSize="sm">
      &copy; {new Date().getFullYear()} Company. All rights reserved.
    </Text>
  </Box>
);

export default Footer;
