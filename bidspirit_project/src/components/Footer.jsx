import React from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../pages/Feedback.jsx"

const Footer = () => (
  <footer className="bg-dark text-light pt-5 pb-3 mt-5">
    <div className="container">
      <div className="row gy-4">
        <div className="col-12 col-md-4">
          <h5 className="fw-bold mb-3" style={{ letterSpacing: "1px" }}>
            BidSpirit
          </h5>
          <p>
            BidSpirit is your trusted platform for online auctions, antiques,
            fine art, collectibles, and more. Discover, bid, and win unique
            treasures from anywhere.
          </p>
        </div>
        <div className="col-6 col-md-2">
          <h6 className="fw-bold mb-3">Useful Links</h6>
          <ul className="list-unstyled">
            <li>
              <Link to="/" className="text-light text-decoration-none">
                Home
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="text-light text-decoration-none">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-light text-decoration-none">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-light text-decoration-none">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/feedback" className="text-light text-decoration-none">
                Feedback
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md-2">
          <h6 className="fw-bold mb-3">Categories</h6>
          <ul className="list-unstyled">
            <li>
              <Link
                to="/gallery?tab=Fine Arts"
                className="text-light text-decoration-none"
              >
                Fine Art
              </Link>
            </li>
            <li>
              <Link
                to="/gallery?tab=Antiques"
                className="text-light text-decoration-none"
              >
                Antiques
              </Link>
            </li>
            <li>
              <Link
                to="/gallery?tab=Furnitures"
                className="text-light text-decoration-none"
              >
                Furnitures
              </Link>
            </li>
            <li>
              <Link
                to="/gallery?tab=Jewelleries"
                className="text-light text-decoration-none"
              >
                Jewelleries
              </Link>
            </li>
            <li>
              <Link
                to="/gallery?tab=Collectibles"
                className="text-light text-decoration-none"
              >
                Collectibles
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-4">
          <h6 className="fw-bold mb-3">Connect With Us</h6>
          <div className="mb-3">
            <a
              href="https://facebook.com"
              className="text-light me-3 fs-4"
              aria-label="Facebook"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://twitter.com"
              className="text-light me-3 fs-4"
              aria-label="Twitter"
            >
              <i className="bi bi-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              className="text-light me-3 fs-4"
              aria-label="Instagram"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              className="text-light fs-4"
              aria-label="LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
          <p className="small mb-0">
            <i className="bi bi-envelope me-2"></i>
            <a
              href="mailto:support@bidspirit.com"
              className="text-light text-decoration-none"
            >
              support@bidspirit.com
            </a>
          </p>
          <p className="small mb-0">
            <i className="bi bi-telephone me-2"></i>
            <a
              href="tel:+1234567890"
              className="text-light text-decoration-none"
            >
              +1 234 567 890
            </a>
          </p>
        </div>
      </div>
      <hr className="border-secondary my-4" />
      <div className="text-center small">
        &copy; {new Date().getFullYear()} BidSpirit. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
