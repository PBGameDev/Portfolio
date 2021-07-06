import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Header.css';

export default function Header() {
  return (
    <Navbar bg="transparent" expand="lg">
      <Navbar.Brand href="#Home">
        <img
          src="/Logo.png"
          width="100"
          height="50"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="abs-center-x">
          <Nav.Link href="#Home">Home</Nav.Link>
          <Nav.Link href="#Link">About</Nav.Link>
          <Nav.Link href="#ProfessionalWorks">Professional Works</Nav.Link>
          <Nav.Link href="#PersonalProjects">Personal Projects</Nav.Link>
          <Nav.Link href="#Resume">Résumé</Nav.Link>
          <Nav.Link href="#Contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}