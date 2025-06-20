
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";


const galleryData = {
  "Fine Arts": [
    {
      img: "/assets/img1.jpg",
      name: "Sunset Over River",
      desc: "A beautiful landscape painting by A. Artist.",
      price: "₦250,000"
    },
  ],
  "Antiques": [
    {
      img: "/assets/antique1.jpg",
      name: "Victorian Clock",
      desc: "19th-century ornate clock, fully functional.",
      price: "₦120,000"
    },
  ],
  "Furnitures": [
    {
      img: "/assets/furniture1.jpg",
      name: "Classic Oak Chair",
      desc: "Handcrafted oak chair, vintage design.",
      price: "₦45,000"
    },
  ],
  "Jewelleries": [
    {
      img: "/assets/jewel1.jpg",
      name: "Emerald Necklace",
      desc: "Elegant necklace with real emerald stones.",
      price: "₦300,000"
    },
  ],
  "Collectibles": [
    {
      img: "/assets/collectible1.jpg",
      name: "Rare Coin Set",
      desc: "Limited edition coin set from 1960.",
      price: "₦80,000"
    },
    {
      img: "/assets/collectible2.jpg",
      name: "Vintage Stamp Collection",
      desc: "A collection of rare German postage stamps, perfect for philatelists and collectors.",
      price: "#95,000"
    }
  ]
};

const TABS = Object.keys(galleryData);
const PAGE_SIZE = 8;

const useQuery = () => new URLSearchParams(useLocation().search);

const Gallery = () => {
  const query = useQuery();
  const tabFromUrl = query.get("tab");

  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (tabFromUrl && TABS.includes(tabFromUrl)) {
      setActiveTab(tabFromUrl);
    }
  }, [tabFromUrl]);

  useLocation().search; 

  const filteredItems = galleryData[activeTab].filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.desc.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredItems.length / PAGE_SIZE);
  const paginated = filteredItems.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  useEffect(() => {
    setPage(1);
  }, [activeTab, search]);

  return (
    <div className="container-fluid py-5" style={{
      minHeight: "100vh",
      background: "linear-gradient(120deg, #e6fff3 0%, #b2f7cc 40%, #43e97b 100%)"
    }}>
      <h1 className="fw-bold text-center mb-4" style={{ color: "#11998e" }}>Gallery</h1>

      {/* Tabs */}
      <ul className="nav nav-pills justify-content-center mb-4 flex-wrap">
        {TABS.map(tab => (
          <li className="nav-item" key={tab}>
            <button
              className={`nav-link fw-bold ${activeTab === tab ? "active" : ""}`}
              style={{
                color: activeTab === tab ? "#fff" : "#11998e",
                background: activeTab === tab ? "#11998e" : "transparent",
                border: "1.5px solid #11998e",
                marginRight: 8,
                minWidth: 120,
                borderRadius: 20,
                transition: "all 0.2s"
              }}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>

      {/* Search */}
      <div className="row mb-4 justify-content-center">
        <div className="col-12 col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder={`Search ${activeTab.toLowerCase()}...`}
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ borderRadius: 20, border: "1.5px solid #11998e" }}
          />
        </div>
      </div>

      {/* Gallery */}
      <div className="row g-4">
        {paginated.map((item, idx) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={idx}>
            <div className="card h-100 shadow-sm">
              <img
                src={item.img}
                alt={item.name}
                className="card-img-top"
                style={{ height: 180, objectFit: "cover", borderRadius: "12px 12px 0 0" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{item.name}</h5>
                <p className="card-text text-muted" style={{ fontSize: "0.98rem" }}>{item.desc}</p>
                <span className="badge rounded-pill px-3 py-2 mt-auto" style={{ background: "#fffbe6", color: "#e67e22", fontSize: "1.1rem", border: "1.5px solid #e67e22" }}>
                  <i className="bi bi-tag me-1"></i>
                  {item.price}
                </span>
              </div>
            </div>
          </div>
        ))}
        {paginated.length === 0 && (
          <div className="col-12 text-center text-muted py-5">
            No items found in this section.
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <nav className="mt-4">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => setPage(page - 1)}>&laquo;</button>
            </li>
            {[...Array(totalPages)].map((_, idx) => (
              <li key={idx} className={`page-item ${page === idx + 1 ? "active" : ""}`}>
                <button className="page-link" onClick={() => setPage(idx + 1)}>{idx + 1}</button>
              </li>
            ))}
            <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => setPage(page + 1)}>&raquo;</button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Gallery;
