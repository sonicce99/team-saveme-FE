import React from "react";
import { Modal, Button } from "react-bootstrap";
import { ModelRow, ModelRows } from "../../styles/ModalStyle";
import theme from "../../styles/theme";

const ModalShow = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} size="xl">
      <Modal.Header closeButton>
        <Modal.Title>관심공고</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ModelRows bgColor={theme.colors.colorBlue}>
          <ModelRow>1</ModelRow>
          <ModelRow>2</ModelRow>
          <ModelRow>3</ModelRow>
        </ModelRows>
      </Modal.Body>

      {/*
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
      */}
    </Modal>
  );
};

export default ModalShow;
