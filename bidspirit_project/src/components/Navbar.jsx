import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Navbar as BsNavbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/logo.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/Navbar.css";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/auctions", label: "Auctions" },
  { to: "/feedback", label: "Feedback" },
  { to: "/sitemap", label: "Site Map" },
];

const Navbar = ({ onAuthClick, visitCount, firstName }) => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  return (
    <BsNavbar
      expand="md"
      bg="light"
      fixed="top"
      className="border-bottom shadow-sm fade-in-navbar"
      expanded={expanded}
    >
      <Container fluid>
        <div className="d-flex align-items-center">
          <BsNavbar.Brand
            as={Link}
            to="/"
            className="fw-bold d-flex align-items-center me-3 mb-0"
          >
            <img
              src={logo}
              alt="BidSpirit Logo"
              style={{
                height: 38,
                width: 38,
                marginRight: 10,
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            BidSpirit
          </BsNavbar.Brand>
        </div>

        <BsNavbar.Toggle
          aria-controls="navbar-content"
          onClick={() => setExpanded((prev) => !prev)}
        />

        <BsNavbar.Collapse id="navbar-content">
          <Nav
            className="ms-auto align-items-center"
            style={{ marginRight: "2.5rem" }}
          >
            {navLinks.map((link) => (
              <Nav.Link
                as={Link}
                to={link.to}
                key={link.to}
                onClick={() => setExpanded(false)}
                className={`custom-nav-link ${
                  location.pathname === link.to ? "active" : ""
                }`}
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

          <div
            className="d-none d-md-flex align-items-center ms-3"
            style={{ gap: "10px" }}
          >
            <span
              className="text-secondary"
              style={{ fontSize: "1rem", whiteSpace: "nowrap" }}
            >
              <i className="bi bi-people me-1"></i>
              Visitors: {visitCount}
            </span>

            {firstName && (
              <div
                style={{
                  background: "#fff",
                  borderRadius: "20px",
                  boxShadow: "0 2px 8px rgba(67,233,123,0.10)",
                  padding: "6px 14px",
                  fontWeight: 600,
                  color: "#11998e",
                  fontSize: "1rem",
                }}
              >
                {firstName}
              </div>
            )}
          </div>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;
