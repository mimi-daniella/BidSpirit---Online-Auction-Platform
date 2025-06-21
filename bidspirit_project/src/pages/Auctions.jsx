import React, { useState } from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import antique1 from "../assets/antique1.jpg";
import antique2 from "../assets/antique2.jpg";
import antique3 from "../assets/antique3.jpg";
import antique4 from "../assets/antique4.jpg";
import furniture1 from "../assets/furniture1.jpg";
import furniture2 from "../assets/furniture2.jpg";
import furniture3 from "../assets/furniture3.jpg";
import furniture4 from "../assets/furniture4.jpg";
import auction1 from "../assets/auction1.jpg";
import auction2 from "../assets/auction2.jpg";
import auction3 from "../assets/auction3.jpg";
import collectible1 from "../assets/collectible1.jpg";
import collectible2 from "../assets/collectible2.jpg";
import collectible3 from "../assets/collectible3.jpg";
import collectible4 from "../assets/collectible4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import jewel1 from "../assets/jewel1.jpg";
import jewel2 from "../assets/jewel2.jpg";
import jewel3 from "../assets/jewel3.jpg";
import jewel4 from "../assets/jewel4.jpg";
import sponsored1 from "../assets/sponsored1.jpg";
import sponsored2 from "../assets/sponsored2.jpg";
import sponsored3 from "../assets/sponsored3.jpg";
import sponsored4 from "../assets/sponsored4.jpg";
import SearchBar from "../components/Searchbar";
import auctions from "../pages/auctions.json";

const TABS = ["All", "Live", "Upcoming", "Completed"];
const PAGE_SIZE = 4;

const imageMap = {
  "/assets/img1.jpg": img1,
  "/assets/img2.jpg": img2,
  "/assets/img3.jpg": img3,
  "/assets/img4.jpg": img4,
  "/assets/antique1.jpg": antique1,
  "/assets/antique2.jpg": antique2,
  "/assets/antique3.jpg": antique3,
  "/assets/antique4.jpg": antique4,
  "/assets/furniture1.jpg": furniture1,
  "/assets/furniture2.jpg": furniture2,
  "/assets/furniture3.jpg": furniture3,
  "/assets/furniture4.jpg": furniture4,
  "/assets/auction1.jpg": auction1,
  "/assets/auction2.jpg": auction2,
  "/assets/auction3.jpg": auction3,
  "/assets/collectible1.jpg": collectible1,
  "/assets/collectible2.jpg": collectible2,
  "/assets/collectible3.jpg": collectible3,
  "/assets/collectible4.jpg": collectible4,
  "/assets/img5.jpg": img5,
  "/assets/img6.jpg": img6,
  "/assets/jewel1.jpg": jewel1,
  "/assets/jewel2.jpg": jewel2,
  "/assets/jewel3.jpg": jewel3,
  "/assets/jewel4.jpg": jewel4,
  "/assets/sponsored1.jpg": sponsored1,
  "/assets/sponsored2.jpg": sponsored2,
  "/assets/sponsored3.jpg": sponsored3,
  "/assets/sponsored4.jpg": sponsored4,
};

const auctionsWithImages = auctions.map((a) => ({
  ...a,
  title: a.title || a.name,
  desc: a.desc || a.description,
  image: imageMap[a.image] || imageMap[a.imageUrl] || a.image || a.imageUrl,
}));

const cardColor = "#f8f9fa";

const Auctions = () => {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [modalAuction, setModalAuction] = useState(null);
  const [page, setPage] = useState(1);

  const searchProducts = auctionsWithImages.map((a) => ({
    name: a.title,
    img: a.image,
    desc: a.desc,
    price: a.price,
    status: a.status,
    date: a.date,
    id: a.id,
  }));

  const handleResultClick = (item) => {
    const auction = auctionsWithImages.find((a) => a.id === item.id);
    if (auction) setModalAuction(auction);
  };

  const tabFiltered = auctionsWithImages.filter((a) =>
    activeTab === "All" ? true : a.status === activeTab
  );

  const filteredAuctions = tabFiltered.filter(
    (a) =>
      (a.title && a.title.toLowerCase().includes(search.toLowerCase())) ||
      (a.desc && a.desc.toLowerCase().includes(search.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredAuctions.length / PAGE_SIZE);
  const paginated = filteredAuctions.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  return (
    <div
      className="auctions-bg py-5"
      style={{
        minHeight: "100vh",
        background: "#fff",
        padding: "32px 0",
      }}
    >
      <div className="container" style={{ padding: "0 8px" }}>
        <h1
          className="fw-bold mb-4 text-center"
          style={{
            color: "#111",
            letterSpacing: "1px",
            fontFamily: "'Fondamento', cursive",
            fontSize: "2.5rem",
          }}
        >
          Auctions
        </h1>

        <ul className="nav nav-pills justify-content-center mb-4 flex-wrap">
          {TABS.map((tab) => (
            <li className="nav-item" key={tab}>
              <button
                className={`nav-link fw-bold ${
                  activeTab === tab ? "active" : ""
                }`}
                style={{
                  color: activeTab === tab ? "#fff" : "#11998e",
                  background: activeTab === tab ? "#11998e" : "transparent",
                  border: "1.5px solid #11998e",
                  marginRight: 8,
                  minWidth: 100,
                  transition: "all 0.2s",
                  borderRadius: 20,
                  fontSize: "1rem",
                }}
                onClick={() => {
                  setActiveTab(tab);
                  setPage(1);
                }}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>

        <div className="d-flex justify-content-center mb-4">
          <SearchBar
            products={searchProducts}
            onResultClick={handleResultClick}
          />
        </div>

        <div className="row g-4">
          {paginated.map((auction) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex"
              key={auction.id}
            >
              <div
                className="card h-100 flex-fill"
                onClick={() => setModalAuction(auction)}
                style={{
                  cursor: "pointer",
                  border: "1.5px solid #e6fff3",
                  borderRadius: 16,
                  transition: "transform 0.18s, box-shadow 0.18s",
                  boxShadow:
                    "0 4px 18px rgba(67,233,123,0.13), 0 1.5px 8px rgba(0,0,0,0.04)",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  background: cardColor,
                  minWidth: 0,
                }}
              >
                <img
                  src={auction.image}
                  alt={auction.title}
                  className="card-img-top"
                  style={{
                    height: 160,
                    minHeight: 120,
                    minWidth: 120,
                    objectFit: "cover",
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    width: "100%",
                  }}
                  loading="lazy"
                />
                <div className="card-body d-flex flex-column p-3">
                  <h5
                    className="card-title fw-bold text-center"
                    style={{
                      color: "#11998e",
                      fontFamily: "'Fondamento', cursive",
                      fontSize: "1.15rem",
                      minHeight: 48,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {auction.title}
                  </h5>
                  <p className="mb-2 text-center">
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
                    <p className="mb-1 text-danger fw-bold text-center">
                      <i className="bi bi-clock-history me-1"></i>Ends soon!
                    </p>
                  )}
                  <p
                    className="mb-1 text-muted text-center"
                    style={{ fontSize: ".98rem" }}
                  >
                    Date: {auction.date}
                  </p>
                  <p
                    className="mb-2 text-center"
                    style={{ fontSize: ".97rem", color: "#555" }}
                  >
                    {auction.desc}
                  </p>
                  <p
                    className="fw-bold mt-auto text-center"
                    style={{ color: "#11998e", fontSize: "1.1rem" }}
                  >
                    <span style={{ color: "black", fontWeight: "bolder" }}>
                      BP:{" "}
                    </span>
                    {auction.price}
                  </p>
                  <button
                    className="btn btn-outline-success w-100 fw-bold mt-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      setModalAuction(auction);
                    }}
                    style={{ borderRadius: 20, fontSize: ".98rem" }}
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

        {totalPages > 1 && (
          <nav className="mt-4">
            <ul className="pagination justify-content-center">
              <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
                <button className="page-link" onClick={() => setPage(page - 1)}>
                  &laquo;
                </button>
              </li>
              {[...Array(totalPages)].map((_, idx) => (
                <li
                  key={idx}
                  className={`page-item ${page === idx + 1 ? "active" : ""}`}
                >
                  <button
                    className="page-link"
                    onClick={() => setPage(idx + 1)}
                  >
                    {idx + 1}
                  </button>
                </li>
              ))}
              <li
                className={`page-item ${page === totalPages ? "disabled" : ""}`}
              >
                <button className="page-link" onClick={() => setPage(page + 1)}>
                  &raquo;
                </button>
              </li>
            </ul>
          </nav>
        )}
        {modalAuction && (
          <div
            className="modal fade show"
            tabIndex="-1"
            style={{ display: "block", background: "rgba(0,0,0,0.4)" }}
            onClick={() => setModalAuction(null)}
          >
            <div
              className="modal-dialog modal-dialog-centered"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-content" style={{ borderRadius: 18 }}>
                <div className="modal-header border-0">
                  <h5
                    className="modal-title fw-bold"
                    style={{
                      color: "#11998e",
                      fontFamily: "'Fondamento', cursive",
                    }}
                  >
                    {modalAuction.title}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setModalAuction(null)}
                  ></button>
                </div>
                <div className="modal-body text-center">
                  <img
                    src={modalAuction.image}
                    alt={modalAuction.title}
                    className="img-fluid mb-3"
                    style={{
                      maxHeight: 220,
                      minWidth: 180,
                      minHeight: 120,
                      borderRadius: 12,
                      objectFit: "cover",
                    }}
                  />
                  <p
                    className="mb-3"
                    style={{ fontSize: "1.1rem", color: "#555" }}
                  >
                    {modalAuction.desc}
                  </p>
                  <span
                    className="badge rounded-pill px-3 py-2"
                    style={{
                      background: "#fffbe6",
                      color: "#e67e22",
                      fontSize: "1.2rem",
                      border: "1.5px solid #e67e22",
                    }}
                  >
                    <i
                      className="bi bi-hammer me-1"
                      style={{ color: "#e67e22" }}
                    ></i>
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
