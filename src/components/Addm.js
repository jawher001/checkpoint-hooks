// const Addm = () => {
//   return <div>
//     <input type="text"/>
//     <input type="text"/>
//     <input type="text"/>
// <button>Ssave</button>
//   </div>;
// };

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert } from "bootstrap";

function Addm({ handeleadd }) {
  const [imgurl, setimgurl] = useState("");
  const [title, settitle] = useState("");
  const [BIO, setbio] = useState("");
  const [Rating, setrating] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlesave = (e) => {
    e.preventDefault();
    const newmovie = {
      id: Math.random(),
      title: title,
      posterURL: imgurl,
      description: BIO,
      rating: Rating,
    };
    if (!title || !imgurl || !BIO || !Rating) {
      return alert("complet the form monkey");
    }
    handeleadd(newmovie);
    handleClose();
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
         ADD A NEW MOVIE BRO
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Add Movie </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handlesave}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Put movie imgurl</Form.Label>
              <Form.Control
                value={imgurl}
                onChange={(e) => setimgurl(e.target.value)}
                type="url"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Put movie name</Form.Label>
              <Form.Control
                value={title}
                onChange={(e) => settitle(e.target.value)}
                autoFocus
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Put movie description</Form.Label>
              <Form.Control
                value={BIO}
                onChange={(e) => setbio(e.target.value)}
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Put movie rating</Form.Label>
              <Form.Control
                value={Rating}
                onChange={(e) => setrating(e.target.value)}
                type="number"
              />
            </Form.Group>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

// render(<Example />);
export default Addm;
