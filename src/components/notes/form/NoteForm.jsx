import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../../../store/reducers/notesReducer";

import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import classes from "./NoteForm.module.css";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NoteForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [show, setShow] = useState(false);

  let dispatch = useDispatch();

  const handleClose = () => {
    let id = uuidv4();
    dispatch(
      addNote({ id: id, title: title, body: body, date: moment().format("ll") })
    );
    setShow(false);
  };

  const handleShow = () => setShow(true);
  const bodyhandler = (e) => setBody(e.target.value);
  const titlehandler = (e) => setTitle(e.target.value);

  return (
    <>
      <Button
        variant="secondary"
        onClick={handleShow}
        style={{ display: "block", margin: "0 auto" }}
        className={classes.addButton}
      >
        Add note
      </Button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create note</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <FloatingLabel controlId="floatingInputGrid" label="Note title">
                <Form.Control
                  type="text"
                  placeholder=""
                  onChange={titlehandler}
                  maxLength={20}
                />
              </FloatingLabel>
            </Form.Group>

            <FloatingLabel controlId="floatingTextarea2" label="Note body">
              <Form.Control
                as="textarea"
                maxLength={150}
                style={{ height: "100px" }}
                onChange={bodyhandler}
              />
            </FloatingLabel>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add note
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
