import React from "react";
import { Link } from "react-router-dom";

const links = [
  { to: "/", label: "Home", icon: "bi-house" },
  { to: "/auctions", label: "Auctions", icon: "bi-gavel" },
  { to: "/gallery", label: "Gallery", icon: "bi-images" },
  { to: "/about", label: "About Us", icon: "bi-info-circle" },
  { to: "/contact", label: "Contact Us", icon: "bi-envelope" },
  { to: "/feedback", label: "Feedback", icon: "bi-chat-dots" },
  { to: "/sitemap", label: "Site Map", icon: "bi-diagram-3" },
];

const Sitemap = () => (
  <div
    className="container py-5"
    style={{
      minHeight: "100vh",
      width: "100vw",
      background:
        "linear-gradient(120deg, #e6fff3 0%, #b2f7cc 40%, #43e97b 100%)",
      backgroundAttachment: "fixed",
    }}
  >
    <div className="container py-5" style={{ maxWidth: 700 }}>
      <div className="card shadow-lg border-0" style={{ borderRadius: 18 }}>
        <div className="card-body p-4">
          <h2 className="fw-bold mb-3 text-center" style={{ color: "#11998e" }}>
            Site Map
          </h2>
          <p className="text-center text-muted mb-4">
            Quickly navigate to any section of BidSpirit using the links below.
          </p>
          <div className="list-group list-group-flush">
            {links.map((link, idx) => (
              <Link
                key={idx}
                to={link.to}
                className="list-group-item list-group-item-action d-flex align-items-center"
                style={{
                  fontSize: "1.1rem",
                  padding: "1rem 1.5rem",
                  border: "none",
                  borderBottom:
                    idx !== links.length - 1 ? "1px solid #e6fff3" : "none",
                  transition: "background 0.2s",
                }}
              >
                <i
                  className={`bi ${link.icon} me-3`}
                  style={{ fontSize: "1.4rem", color: "#11998e" }}
                ></i>
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Sitemap;
