import { Link } from "react-router-dom";
import { useState } from "react";

const colors = {
    white: "#ffffff",
    linkHoverColor: "#C85B20", // Added missing #
};

const navStyles = {
    backgroundColor: "white",
    height: "80px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    boxSizing: "border-box",
};

const baseLinkStyles = {
    color: "black",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "bold",
    padding: "10px 15px",
    display: "inline-flex",
    alignItems: "center",
    transition: "color 0.3s, transform 0.3s", // Smooth transition
};

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/gallery", label: "Gallery" },
    { to: "/auctions", label: "Auctions" },
    { to: "/menu", label: "Menu" },
    { to: "/shops", label: "Shops" },
    { to: "/register", label: "Log In" },
  ];

  return (
    <nav className="navbar" style={{ padding: 0, margin: 0 }}>
      <div className="navbar-container" style={navStyles}>
        <Link to="/" className="navbar-logo" style={baseLinkStyles}>
          BidSpirit
        </Link>
        <ul
          className="navbar-menu"
          style={{ 
            listStyleType: "none",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "20px",
            margin: 0,
            padding: 0,
          }}
        >
          {navLinks.map((link, idx) => (
            <li className="navbar-item" key={link.to}>
              <Link
                to={link.to}
                className="navbar-link"
                style={{
                  ...baseLinkStyles,
                  color: hoveredIndex === idx ? colors.linkHoverColor : baseLinkStyles.color,
                  transform: hoveredIndex === idx ? "scale(1.08)" : "scale(1)",
                }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            Visitor Count: <span id="visitor-count">0</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;