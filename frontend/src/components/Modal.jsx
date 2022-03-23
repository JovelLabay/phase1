import React from "react";
import { Modal } from "react-bootstrap";

export default function TheModal({
  id,
  firstname,
  lastname,
  date,
  time,
  show,
  handleClose,
}) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="form_header">
          <Modal.Title>
            {"PERSON ID: "}
            {id}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {"First Name: "}
            {firstname}
          </p>
          <p>
            {"Last Name: "}
            {lastname}
          </p>
          <p>
            {"Date Created: "}
            {date}
          </p>
          <p>
            {"Time Created: "}
            {time}
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}
