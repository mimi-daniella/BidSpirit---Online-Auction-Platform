import React, { useState, memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar as BsNavbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/logo.jpg";
import "bootstrap-icons/font/bootstrap-icons.css";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/auctions", label: "Auctions" },
  { to: "/sitemap", label: "Site Map" },
  { to: "/register", label: "Sign Up" },
];

const Navbar = ({ onAuthClick, visitCount, firstName }) => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  return (
    <nav>
      <BsNavbar
        expand="md"
        bg="light"
        fixed="top"
        className="border-bottom shadow-sm fade-in-navbar"
        expanded={expanded}
        as="header"
        role="navigation"
      >
        <Container
          fluid
          className="d-flex flex-nowrap align-items-center"
          style={{ minWidth: 0 }}
        >
          <BsNavbar.Brand
            as={Link}
            to="/"
            className="fw-bold d-flex align-items-center me-3 mb-0"
            style={{ minWidth: 0 }}
          >
            <img
              src={logo}
              alt="BidSpirit Logo"
              width={38}
              height={38}
              style={{
                marginRight: 10,
                borderRadius: "50%",
                objectFit: "cover",
                flexShrink: 0,
              }}
              loading="lazy"
            />
            <span
              className="d-none d-sm-inline"
              style={{ color: "#F78B51", fontWeight: 700, fontSize: "1.3rem" }}
            >
              BidSpirit
            </span>
          </BsNavbar.Brand>

          <BsNavbar.Toggle
            aria-controls="navbar-content"
            aria-label="Toggle navigation"
            onClick={() => setExpanded((prev) => !prev)}
          />

          <BsNavbar.Collapse id="navbar-content" as="nav">
            <Nav
              className="navbar-nav ms-auto align-items-center flex-nowrap"
              style={{ marginRight: "1rem", gap: "0.5rem" }}
              as="ul"
            >
              {navLinks.map((link) => (
                <Nav.Item as="li" key={link.to}>
                  <Nav.Link
                    as={Link}
                    to={link.to}
                    onClick={() => setExpanded(false)}
                    className={`custom-nav-link px-2 py-1 ${
                      location.pathname === link.to ? "active" : ""
                    }`}
                    style={{
                      color: location.pathname === link.to ? "#fff" : "#000",
                      background:
                        location.pathname === link.to
                          ? "#11998e"
                          : "transparent",
                      fontWeight: 500,
                      transition: "background 0.2s, color 0.2s",
                      fontSize: "1rem",
                    }}
                  >
                    {link.label}
                  </Nav.Link>
                </Nav.Item>
              ))}
              <Nav.Item as="li" className="d-md-none">
                <button
                  className="btn btn-success fw-bold w-100 mt-2"
                  style={{ fontSize: "1rem", borderRadius: 20 }}
                  onClick={() => {
                    setExpanded(false);
                    if (onAuthClick) onAuthClick();
                  }}
                  type="button"
                >
                  Sign Up
                </button>
              </Nav.Item>
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
                Visitor Count: {visitCount}
              </span>
            </div>
          </BsNavbar.Collapse>
        </Container>
      </BsNavbar>

      <style>
        {`
  @keyframes borderBottomIn {
    0% { border-bottom-width: 0.5px; border-bottom-color: #C85B20; }
    60% { border-bottom-width: 1px; border-bottom-color: #C85B20; }
    100% { border-bottom-width: 2.5px; border-bottom-color: #C85B20; }
  }
  .custom-nav-link {
    transition: background 0.2s, color 0.2s, border-bottom 0.2s;
    border-bottom: 0 solid transparent;
    background: transparent !important;
    border-radius: 0 !important;
    white-space: nowrap;
  }
  .custom-nav-link:hover {
    color: #C85B20 !important;
    background: transparent !important;
    animation: borderBottomIn 0.5s cubic-bezier(0.4,0,0.2,1) forwards;
    border-bottom: 2.5px solid #C85B20 !important;
    border-radius: 0 !important;
  }
  .custom-nav-link.active,
  .custom-nav-link:active {
    color: #1A237E !important;
    background: transparent !important;
    border-bottom: none !important;
    border-radius: 0 !important;
    animation: none !important;
  }
  .navbar-nav {
    white-space: nowrap;
    flex-wrap: nowrap !important;
    overflow-x: auto;
    align-items: center;
    min-width: 0;
    flex-shrink: 1;
  }
  @media (max-width: 991.98px) {
    .navbar-nav {
      gap: 0.2rem !important;
    }
    .custom-nav-link {
      padding-left: 0.7rem !important;
      padding-right: 0.7rem !important;
    }
  }
  @media (max-width: 767.98px) {
    .fade-in-navbar {
      font-size: 0.98rem;
    }
    .custom-nav-link {
      padding: 0.7rem 1rem !important;
      border-radius: 8px !important;
    }
  }
`}
      </style>
    </nav>
  );
};

export default memo(Navbar);
