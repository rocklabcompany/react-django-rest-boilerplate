import React from "react";
import { Flex, Icon } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const TableHeader = ({ title, modalCreate }) => (
  <Flex flexDirection="row" justifyContent={"space-between"} p={4}>
    <h4>{title}</h4>
    <Icon as={AddIcon} onClick={modalCreate} fontSize="30px" color="#007bff" />
  </Flex>
);

export default TableHeader;
