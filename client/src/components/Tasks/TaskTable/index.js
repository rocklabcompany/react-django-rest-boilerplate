import React, { Fragment } from "react";

import Pagination from "./PaginateTable";

import { Box, Icon, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

const TaskTable = (props) => {
  return (
    <Fragment>
      <Box overflowX="auto">
        <Table variant="striped" colorScheme="gray">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Description</Th>
              <Th>Due Date</Th>
              <Th>Estimated Time</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {props.tasks.map((task) => (
              <Tr key={task.id}>
                <Td>{task.id}</Td>
                <Td>{task.name}</Td>
                <Td>{task.description}</Td>
                <Td>{task.due_date}</Td>
                <Td>{task.estimated_time}</Td>
                <Td>
                  {task.status === 0
                    ? "To Do"
                    : task.status === 1
                      ? "In Progress"
                      : task.status === 2
                        ? "Done"
                        : null}
                </Td>
                <Td>
                  <Icon
                    onClick={() => props.modal("modalEdit", task)}
                    as={EditIcon}
                    mr={2}
                  />
                  <Icon
                    as={DeleteIcon}
                    aria-label="Delete Task"
                    onClick={() => props.modal("modalDelete", task)}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
      <Pagination
        fetchData={props.fetchData}
        page={props.page}
        pages={props.pages}
      />
    </Fragment>
  );
};

export default TaskTable;
