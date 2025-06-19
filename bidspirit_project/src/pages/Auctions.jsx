import React, { useState } from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import antique1 from "../assets/antique1.jpg";
import antique2 from "../assets/antique2.jpg";
import furniture1 from "../assets/furniture1.jpg";
import furniture2 from "../assets/furniture2.jpg";
// import "./Auctions.css";

const mockAuctions = [
  {
    id: 1,
    title: "Modern Art",
    image: img1,
    date: "2025-07-01",
    status: "Live",
    price: "₦50,000",
    desc: "A vibrant piece of modern art, perfect for contemporary spaces.",
  },
  {
    id: 2,
    title: "Classic Portrait",
    image: img2,
    date: "2025-07-03",
    status: "Upcoming",
    price: "₦35,000",
    desc: "A timeless classic portrait, beautifully framed.",
  },
  {
    id: 3,
    title: "Abstract Colors",
    image: img3,
    date: "2025-07-02",
    status: "Live",
    price: "₦42,000",
    desc: "An abstract painting with bold colors and dynamic shapes.",
  },
  {
    id: 4,
    title: "Nature's Beauty",
    image: img4,
    date: "2025-07-10",
    status: "Completed",
    price: "₦28,000",
    desc: "A serene landscape capturing the beauty of nature.",
  },
  {
    id: 5,
    title: "Antique Telescope",
    image: antique1,
    date: "2025-07-05",
    status: "Upcoming",
    price: "₦60,000",
    desc: "A rare antique telescope for collectors and enthusiasts.",
  },
  {
    id: 6,
    title: "Vintage Clock",
    image: antique2,
    date: "2025-07-07",
    status: "Live",
    price: "₦30,000",
    desc: "A vintage clock with intricate details and craftsmanship.",
  },
  {
    id: 7,
    title: "Elegant Sofa",
    image: furniture1,
    date: "2025-07-08",
    status: "Upcoming",
    price: "₦120,000",
    desc: "A luxurious and comfortable sofa for your living room.",
  },
  {
    id: 8,
    title: "Wooden Chair",
    image: furniture2,
    date: "2025-07-09",
    status: "Completed",
    price: "₦18,000",
    desc: "A handcrafted wooden chair with a classic design.",
  },
];

const TABS = ["All", "Live", "Upcoming", "Completed"];
const PAGE_SIZE = 4;

const Auctions = () => {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [modalAuction, setModalAuction] = useState(null);
  const [page, setPage] = useState(1);

  // Filter by tab
  const tabFiltered = mockAuctions.filter(a =>
    activeTab === "All" ? true : a.status === activeTab
  );

  // Filter by search
  const filteredAuctions = tabFiltered.filter(a =>
    a.title.toLowerCase().includes(search.toLowerCase()) ||
    a.desc.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredAuctions.length / PAGE_SIZE);
  const paginated = filteredAuctions.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="auctions-bg py-5" style={{ minHeight: "100vh", background: "linear-gradient(120deg, #e6fff3 0%, #b2f7cc 40%, #43e97b 100%)" }}>
      <div className="container-fluid">
        <h1 className="fw-bold mb-4 text-center" style={{ color: "#11998e", letterSpacing: "1px" }}>Auctions</h1>
        {/* Tabs */}
        <ul className="nav nav-pills justify-content-center mb-4">
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
                  transition: "all 0.2s"
                }}
                onClick={() => { setActiveTab(tab); setPage(1); }}
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
              placeholder="Search auctions by title or description..."
              value={search}
              onChange={e => { setSearch(e.target.value); setPage(1); }}
              style={{ borderRadius: 20, border: "1.5px solid #11998e" }}
            />
          </div>
        </div>
        {/* Auction Cards */}
        <div className="row g-4">
          {paginated.map(auction => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={auction.id}>
              <div
                className="card h-100 shadow-sm"
                onClick={() => setModalAuction(auction)}
                style={{
                  cursor: "pointer",
                  border: "1.5px solid #e6fff3",
                  borderRadius: 16,
                  transition: "transform 0.18s, box-shadow 0.18s",
                  boxShadow: "0 4px 16px rgba(67,233,123,0.10)"
                }}
              >
                <img
                  src={auction.image}
                  alt={auction.title}
                  className="card-img-top"
                  style={{
                    height: 180,
                    objectFit: "cover",
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold" style={{ color: "#11998e" }}>{auction.title}</h5>
                  <p className="mb-2">
                    <span
                      className={`badge px-3 py-2 fw-semibold ${
                        auction.status === "Live"
                          ? "bg-success"
                          : auction.status === "Upcoming"
                          ? "bg-warning text-dark"
                          : "bg-secondary"
                      }`}
                      style={{ fontSize: "1rem" }}
                    >
                      {auction.status}
                    </span>
                  </p>
                  {auction.status === "Live" && (
                    <p className="mb-1 text-danger fw-bold">
                      <i className="bi bi-clock-history me-1"></i>Ends soon!
                    </p>
                  )}
                  <p className="mb-1 text-muted" style={{ fontSize: ".98rem" }}>Date: {auction.date}</p>
                  <p className="mb-2" style={{ fontSize: ".97rem", color: "#555" }}>{auction.desc}</p>
                  <p className="fw-bold" style={{ color: "#11998e", fontSize: "1.1rem" }}>{auction.price}</p>
                  <button
                    className="btn btn-outline-success w-100 fw-bold"
                    onClick={e => { e.stopPropagation(); setModalAuction(auction); }}
                    style={{ borderRadius: 20 }}
                  >
                    View Auction
                  </button>
                </div>
              </div>
            </div>
          ))}
          {paginated.length === 0 && (
            <div className="col-12 text-center text-muted py-5">
              No auctions found.
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
        {/* Modal */}
        {modalAuction && (
          <div
            className="modal fade show"
            tabIndex="-1"
            style={{ display: "block", background: "rgba(0,0,0,0.4)" }}
            onClick={() => setModalAuction(null)}
          >
            <div className="modal-dialog modal-dialog-centered" onClick={e => e.stopPropagation()}>
              <div className="modal-content" style={{ borderRadius: 18 }}>
                <div className="modal-header border-0">
                  <h5 className="modal-title fw-bold" style={{ color: "#11998e" }}>{modalAuction.title}</h5>
                  <button type="button" className="btn-close" onClick={() => setModalAuction(null)}></button>
                </div>
                <div className="modal-body text-center">
                  <img src={modalAuction.image} alt={modalAuction.title} className="img-fluid mb-3" style={{ maxHeight: 220, borderRadius: 12, objectFit: "cover" }} />
                  <p className="mb-3" style={{ fontSize: "1.1rem", color: "#555" }}>{modalAuction.desc}</p>
                  <span className="badge rounded-pill px-3 py-2" style={{ background: "#fffbe6", color: "#e67e22", fontSize: "1.2rem", border: "1.5px solid #e67e22" }}>
                    <i className="bi bi-hammer me-1" style={{ color: "#e67e22" }}></i>
                    <span className="fw-bold">{modalAuction.price}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
        {modalAuction && <div className="modal-backdrop fade show"></div>}
      </div>
    </div>
  );
};

export default Auctions;