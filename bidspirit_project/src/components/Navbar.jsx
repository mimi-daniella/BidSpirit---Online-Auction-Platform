import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar as BsNavbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/logo.png";
import 'bootstrap-icons/font/bootstrap-icons.css';

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/auctions", label: "Auctions" },
];

  const Navbar = ({ onAuthClick, visitCount, firstName }) => {
    const [expanded, setExpanded] = useState(false);

  return (
    <BsNavbar
      expand="md"
      bg="light"
      fixed="top"
      className="border-bottom shadow-sm"
      expanded={expanded}
    >
      <Container fluid>
        <div className="d-flex align-items-center">
          <BsNavbar.Brand as={Link} to="/" className="fw-bold d-flex align-items-center me-3 mb-0">
            <img
              src={logo}
              alt="BidSpirit Logo"
              style={{ height: 38, width: 38, marginRight: 10, borderRadius: "50%", objectFit: "cover" }}
            />
            BidSpirit
          </BsNavbar.Brand>
          {/* Remove the greeting from here */}
        </div>
        <BsNavbar.Toggle
          aria-controls="navbar-content"
          onClick={() => setExpanded((prev) => !prev)}
        />
        <BsNavbar.Collapse id="navbar-content">
          <Nav className="ms-auto align-items-center" style={{ marginRight: "2.5rem" }}>
            {navLinks.map((link) => (
              <Nav.Link
                as={Link}
                to={link.to}
                key={link.to}
                onClick={() => setExpanded(false)}
                style={{ fontWeight: 500, fontSize: 17 }}
              >
                {link.label}
              </Nav.Link>
            ))}
            <Nav.Link
              as="button"
              className="btn btn-success fw-bold ms-2"
              style={{ padding: "7px 18px", fontSize: "1rem" }}
              onClick={() => {
                setExpanded(false);
                if (onAuthClick) onAuthClick();
              }}
            >
              Sign Up
            </Nav.Link>
          </Nav>
          <span className="ms-3 text-secondary d-none d-md-inline" style={{ fontSize: "1rem", whiteSpace: "nowrap" }}>
            <i className="bi bi-people me-1"></i>
            Visitors: {visitCount}
          </span>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;
