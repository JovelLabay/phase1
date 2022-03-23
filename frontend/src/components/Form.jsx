import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

export default function TheForm({
  Fname,
  setFname,
  Lname,
  setLname,
  create,
  btn,
}) {
  // HANDLE CLOSE AND OPEN
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="form">
      {/* BTN OPEN */}
      <Button className="create" variant="success" onClick={handleShow}>
        Create a list
      </Button>

      {/* MODAL */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add list to the table</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* FORM */}
          <Form onSubmit={create}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Firstname"
                required
                value={Fname}
                onChange={(e) => setFname(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Lastname"
                required
                value={Lname}
                onChange={(e) => setLname(e.target.value)}
              />
            </Form.Group>
            <Button
              variant={btn === "Submit" ? "outline-success" : "outline-primary"}
              type="submit"
            >
              {btn}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
