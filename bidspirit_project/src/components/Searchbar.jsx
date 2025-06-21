import React, { useState, useRef, useEffect, memo } from "react";
import { Form, InputGroup, Spinner } from "react-bootstrap";

const PLACEHOLDERS = ["Search auctions", "Find sellers", "Search items"];

const searchHighlightStyle = {
  backgroundColor: "#ffeb3b",
  fontWeight: "bold",
  borderRadius: "1.5px",
  padding: "0 2px",
};

function highlightSearchMatch(text, query) {
  if (!query || !text) return text;
  const safeQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${safeQuery})`, "gi");
  return text.split(regex).map((part, idx) =>
    regex.test(part) ? (
      <span key={idx} style={searchHighlightStyle}>
        {part}
      </span>
    ) : (
      <React.Fragment key={idx}>{part}</React.Fragment>
    )
  );
}

function filterProducts(query, products) {
  if (!query) return [];
  const q = query.toLowerCase().trim();
  return products
    .filter(
      (p) =>
        (p.name && p.name.toLowerCase().includes(q)) ||
        (p.desc && p.desc.toLowerCase().includes(q)) ||
        (p.seller && p.seller.toLowerCase().includes(q)) ||
        (p.category && p.category.toLowerCase().includes(q)) ||
        (p.tags && p.tags.some((tag) => tag.toLowerCase().includes(q))) ||
        (p.price && p.price.toLowerCase().includes(q))
    )
    .sort((a, b) => {
      const aName = a.name.toLowerCase();
      const bName = b.name.toLowerCase();
      const aStarts = aName.startsWith(q);
      const bStarts = bName.startsWith(q);
      if (aStarts && !bStarts) return -1;
      if (!aStarts && bStarts) return 1;
      return aName.localeCompare(bName);
    });
}

const SearchBar = ({ products = [], onResultClick }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [placeholderIdx, setPlaceholderIdx] = useState(0);
  const timeoutRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIdx((idx) => (idx + 1) % PLACEHOLDERS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setShowDropdown(!!value);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (!value) {
      setResults([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    timeoutRef.current = setTimeout(() => {
      setResults(filterProducts(value, products));
      setLoading(false);
    }, 250);
  };

  const handleBlur = () => {
    setTimeout(() => setShowDropdown(false), 120);
  };

  return (
    <div
      className="w-100 searchbar-root"
      style={{ maxWidth: 500, position: "relative" }}
    >
      <InputGroup>
        <Form.Control
          type="search"
          value={query}
          onChange={handleChange}
          onFocus={() => setShowDropdown(!!query)}
          onBlur={handleBlur}
          className="shadow-sm"
          style={{ minWidth: 0, fontSize: "1rem" }}
          autoComplete="off"
          inputMode="search"
        />
        {!query && (
          <div className="searchbar-placeholder-anim">
            <span
              className="searchbar-placeholder-fade"
              key={placeholderIdx}
              style={{
                fontFamily: "'Montserrat Alternates', Arial, sans-serif",
              }}
            >
              {PLACEHOLDERS[placeholderIdx]}
            </span>
          </div>
        )}
        <InputGroup.Text style={{ background: "#fff" }}>
          {loading ? (
            <Spinner animation="border" size="sm" />
          ) : (
            <i className="bi bi-search"></i>
          )}
        </InputGroup.Text>
      </InputGroup>

      {showDropdown && (
        <div
          className="searchbar-dropdown bg-white border rounded shadow position-absolute w-100 mt-1"
          style={{
            zIndex: 20,
            left: 0,
            maxHeight: 320,
            overflowY: "auto",
            fontSize: "0.97rem",
            touchAction: "manipulation",
          }}
        >
          {loading ? (
            <div className="text-center py-3">
              <Spinner animation="border" size="sm" /> Searching...
            </div>
          ) : results.length > 0 ? (
            results.map((item, idx) => (
              <div
                key={idx}
                className="searchbar-result px-3 py-2 border-bottom small d-flex align-items-center"
                style={{
                  cursor: "pointer",
                  gap: 10,
                  minHeight: 44,
                  userSelect: "none",
                  WebkitTapHighlightColor: "transparent",
                }}
                onMouseDown={() => {
                  setShowDropdown(false);
                  setQuery("");
                  if (onResultClick) onResultClick(item);
                }}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  style={{
                    width: 32,
                    height: 32,
                    objectFit: "cover",
                    borderRadius: 6,
                    marginRight: 10,
                    flexShrink: 0,
                  }}
                  loading="lazy"
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <span className="fw-bold">
                    {highlightSearchMatch(item.name, query)}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-3 text-muted">No results found.</div>
          )}
        </div>
      )}

      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;600&display=swap');
        .searchbar-root { font-family: inherit; width: 100%; max-width: 500px; }
        .searchbar-placeholder-anim {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          display: flex;
          align-items: center;
          padding-left: 1rem;
          color: #adb5bd;
          font-size: 1rem;
          overflow: hidden;
          z-index: 2;
        }
        .searchbar-placeholder-fade {
          animation: fadeUp 0.5s;
          will-change: opacity, transform;
          display: inline-block;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(100%); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 1200px) {
          .searchbar-root { max-width: 400px; }
          .searchbar-dropdown { font-size: 0.96rem; }
        }
        @media (max-width: 900px) {
          .searchbar-root { max-width: 320px; }
          .searchbar-dropdown { font-size: 0.95rem; }
        }
        @media (max-width: 600px) {
          .searchbar-root { max-width: 150px; min-width: 0; }
          .searchbar-dropdown { font-size: 0.94rem; max-height: 180px; }
          .searchbar-result { padding: 0.6rem 0.8rem; }
          .searchbar-root input { font-size: 0.98rem; }
        }
        @media (max-width: 400px) {
          .searchbar-root { max-width: 99vw; }
          .searchbar-dropdown { font-size: 0.93rem; }
        }
      `}
      </style>
    </div>
  );
};

export default memo(SearchBar);
