import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const ModalForm = (props) => {
  const flex = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
  };

  return (
    <Modal isOpen={props.isActive} onClose={props.closeModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <div style={flex}>
            <h3>{props.title}</h3>
            <ModalCloseButton />
          </div>
        </ModalHeader>
        <ModalBody>{props.children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalForm;
