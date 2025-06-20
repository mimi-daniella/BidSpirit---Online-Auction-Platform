import React, { useState } from "react";
import { Form, InputGroup, Spinner } from "react-bootstrap";

const searchHighlightStyle = {
  backgroundColor: "#ffeb3b",
  fontWeight: "bold",
  borderRadius: "1.5px",
  padding: "0 2px",
};

function highlightSearchMatch(text, query) {
  if (!query || !text) return text;
  const regex = new RegExp(`(${query})`, "gi");
  const parts = text.split(regex);



  return (
    <>
      {parts.map((part, idx) =>
        regex.test(part) ? (
          <span key={idx} style={searchHighlightStyle}>{part}</span>
        ) : (
          <React.Fragment key={idx}>{part}</React.Fragment>
        )
      )}
    </>
  );
}

const mockSearch = (query, products) =>
  new Promise((resolve) => {
    setTimeout(() => {
      if (!query) return resolve([]);
      const q = query.toLowerCase().trim();

      const filteredSearch = products.filter(
        (p) =>
          (p.name && p.name.toLowerCase().includes(q)) ||
          (p.desc && p.desc.toLowerCase().includes(q)) ||
          (p.seller && p.seller.toLowerCase().includes(q)) ||
          (p.category && p.category.toLowerCase().includes(q)) ||
          (p.tags && p.tags.some((tag) => tag.toLowerCase().includes(q))) ||
          (p.price && p.price.toLowerCase().includes(q))
      );
      filteredSearch.sort((a, b) => {
        const aName = a.name.toLowerCase();
        const bName = b.name.toLowerCase();
        const aStarts = aName.startsWith(q);
        const bStarts = bName.startsWith(q);
        if (aStarts && !bStarts) return -1;
        if (!aStarts && bStarts) return 1;
        return aName.localeCompare(bName);
      });

      console.log(filteredSearch);
      resolve(filteredSearch);
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
    setTimeout(() => setShowDropdown(false), 150);
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
                <div>
                  <span className="fw-bold">{highlightSearchMatch(item.name, query)}</span>
                </div>
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
