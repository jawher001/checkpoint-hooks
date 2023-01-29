import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Addm from "./Addm";

function Navigation({ searchName, searchRating, title, Rating }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="text"
              className="me-2"
              aria-label="Search"
              value={title}
              onChange={(e) => searchName(e.target.value)}
              placeholder="Search by name"
            />
          </Form>
          <Form className="d-flex">
            <Form.Control
              type="number"
              className="me-2"
              aria-label="Search"
              value={Rating}
              onChange={(e) => searchRating(e.target.value)}
              placeholder="Rating"
            />
          </Form>
          <Button variant="outline-success">search</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
