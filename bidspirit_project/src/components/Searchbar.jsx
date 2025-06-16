import React, { useState } from "react";
import { Form, InputGroup, Spinner } from "react-bootstrap";

const mockSearch = (query, products) =>
  new Promise((resolve) => {
    setTimeout(() => {
      if (!query) return resolve([]);
      const q = query.toLowerCase();
      resolve(
        products.filter(
          (p) =>
            p.name.toLowerCase().includes(q) ||
            (p.desc && p.desc.toLowerCase().includes(q))
        )
      );
    }, 400);
  });

const SearchBar = ({ products = [], onResultClick }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleChange = async (e) => {
    const value = e.target.value;
    setQuery(value);
    setShowDropdown(!!value);
    if (!value) {
      setResults([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    const res = await mockSearch(value, products);
    setResults(res);
    setLoading(false);
  };

  const handleBlur = () => {
    setTimeout(() => setShowDropdown(false), 150); // allow click
  };

  return (
    <div className="w-100" style={{ maxWidth: 500, position: "relative" }}>
      <InputGroup>
        <Form.Control
          type="search"
          placeholder="Search auctions, items, or sellers..."
          value={query}
          onChange={handleChange}
          onFocus={() => setShowDropdown(!!query)}
          onBlur={handleBlur}
          className="shadow-sm"
          style={{ minWidth: 0 }}
        />
        <InputGroup.Text>
          {loading ? (
            <Spinner animation="border" size="sm" />
          ) : (
            <i className="bi bi-search"></i>
          )}
        </InputGroup.Text>
      </InputGroup>
      {showDropdown && (
        <div
          className="bg-white border rounded shadow position-absolute w-100 mt-1"
          style={{ zIndex: 20, left: 0, maxHeight: 320, overflowY: "auto" }}
        >
          {loading ? (
            <div className="text-center py-3">
              <Spinner animation="border" size="sm" /> Searching...
            </div>
          ) : results.length > 0 ? (
            results.map((item, idx) => (
              <div
                key={idx}
                className="px-3 py-2 border-bottom small d-flex align-items-center"
                style={{ cursor: "pointer" }}
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
                  }}
                />
                <span>
                  <span className="fw-bold">{item.name}</span>
                  <br />
                  <span className="text-muted">{item.price}</span>
                </span>
              </div>
            ))
          ) : (
            <div className="text-center py-3 text-muted">No results found.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;