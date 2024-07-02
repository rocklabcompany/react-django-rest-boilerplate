import React from "react";

import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

const ModalDelete = ({ isActive, closeModal, deleteTask, id }) => (
  <Flex>
    <Modal isOpen={isActive} onClose={closeModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Are you sure?</ModalHeader>
        <ModalBody>
          <h5>
            Do you really want to delete this task? This process cannot be
            undone.
          </h5>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={closeModal}>
            No
          </Button>
          <Button colorScheme="red" onClick={() => deleteTask(id)}>
            Yes
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </Flex>
);

export default ModalDelete;
