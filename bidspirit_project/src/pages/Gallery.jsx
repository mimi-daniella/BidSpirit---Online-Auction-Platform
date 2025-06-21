import React, { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import auction1 from "../assets/auction1.jpg";
import auction2 from "../assets/auction2.jpg";
import auction3 from "../assets/auction3.jpg";
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
import jewel1 from "../assets/jewel1.jpg";
import jewel2 from "../assets/jewel2.jpg";
import jewel3 from "../assets/jewel3.jpg";
import jewel4 from "../assets/jewel4.jpg";
import collectible1 from "../assets/collectible1.jpg";
import collectible2 from "../assets/collectible2.jpg";
import collectible3 from "../assets/collectible3.jpg";
import collectible4 from "../assets/collectible4.jpg";
import sponsored1 from "../assets/sponsored1.jpg";
import sponsored2 from "../assets/sponsored2.jpg";
import sponsored3 from "../assets/sponsored3.jpg";
import sponsored4 from "../assets/sponsored4.jpg";
import art from "../pages/art.json";
import antiques from "../pages/antiques.json";
import furnitures from "../pages/furnitures.json";
import jewellery from "../pages/jewellery.json";
import collectibles from "../pages/collectibles.json";

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
  "/assets/jewel1.jpg": jewel1,
  "/assets/jewel2.jpg": jewel2,
  "/assets/jewel3.jpg": jewel3,
  "/assets/jewel4.jpg": jewel4,
  "/assets/collectible1.jpg": collectible1,
  "/assets/collectible2.jpg": collectible2,
  "/assets/collectible3.jpg": collectible3,
  "/assets/collectible4.jpg": collectible4,
  "/assets/sponsored1.jpg": sponsored1,
  "/assets/sponsored2.jpg": sponsored2,
  "/assets/sponsored3.jpg": sponsored3,
  "/assets/sponsored4.jpg": sponsored4,
};

const galleryData = {
  "Fine Arts": art.map((item) => ({
    img: imageMap[item.image || item.img] || item.image || item.img || img1,
    name: item.title,
    desc: item.desc,
    price: item.price,
  })),
  Antiques: antiques.map((item) => ({
    img: imageMap[item.image || item.img] || item.image || item.img || img1,
    name: item.title,
    desc: item.desc,
    price: item.price,
  })),
  Furnitures: furnitures.map((item) => ({
    img: imageMap[item.image || item.img] || item.image || item.img || img1,
    name: item.title,
    desc: item.desc,
    price: item.price,
  })),
  Jewelleries: jewellery.map((item) => ({
    img: imageMap[item.image || item.img] || item.image || item.img || img1,
    name: item.title,
    desc: item.desc,
    price: item.price,
  })),
  Collectibles: collectibles.map((item) => ({
    img: imageMap[item.image || item.img] || item.image || item.img || img1,
    name: item.title,
    desc: item.desc,
    price: item.price,
  })),
};

const TABS = Object.keys(galleryData);
const PAGE_SIZE = 18;

const useQuery = () => new URLSearchParams(useLocation().search);

const cardColor = "#f8f9fa";

function getRandomItems(arr, count) {
  const shuffled = arr.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

const Gallery = () => {
  const query = useQuery();
  const tabFromUrl = query.get("tab");
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [page, setPage] = useState(1);
  const [modalInfo, setModalInfo] = useState({ show: false, item: null });

  useEffect(() => {
    if (tabFromUrl && TABS.includes(tabFromUrl)) {
      setActiveTab(tabFromUrl);
    }
  }, [tabFromUrl]);

  const filteredItems = useMemo(() => {
    // Randomize and add more cards for demo
    const base = galleryData[activeTab];
    let more = [];
    if (base.length > 0) {
      more = getRandomItems(base, Math.min(12, base.length));
    }
    return [...base, ...more];
  }, [activeTab]);

  const totalPages = Math.ceil(filteredItems.length / PAGE_SIZE);

  const paginated = useMemo(() => {
    return filteredItems.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  }, [filteredItems, page]);

  useEffect(() => {
    setPage(1);
  }, [activeTab]);

  const handleCardClick = (item) => setModalInfo({ show: true, item });
  const handleCloseModal = () => setModalInfo({ show: false, item: null });

  return (
    <main
      className="gallery-main"
      style={{
        minHeight: "100vh",
        background: "#fff",
        padding: "40px 0",
      }}
    >
      <div className="container-lg">
        <h1
          className="fw-bold text-center mb-4"
          style={{
            color: "#111",
            fontFamily: "'Fondamento', cursive",
            fontSize: "2.7rem",
            letterSpacing: "1px",
          }}
        >
          Gallery
        </h1>
        <nav aria-label="Gallery categories">
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
                    minWidth: 120,
                    borderRadius: 20,
                    transition: "all 0.2s",
                  }}
                  onClick={() => setActiveTab(tab)}
                  aria-current={activeTab === tab ? "page" : undefined}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <section className="row g-4">
          {paginated.map((item, idx) => (
            <div className="col-6 col-sm-4  col-md-3 col-lg-2" key={idx}>
              <article
                className="card h-100 gallery-card"
                style={{
                  borderRadius: "14px",
                  boxShadow:
                    "0 4px 18px rgba(67,233,123,0.13), 0 1.5px 8px rgba(0,0,0,0.04)",
                  border: "none",
                  padding: "10px",
                  background: cardColor,
                  minHeight: 180,
                  maxWidth: 180,
                  margin: "0 auto",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "stretch",
                  transition: "box-shadow 0.2s",
                }}
                onClick={() => handleCardClick(item)}
              >
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "stretch",
                    alignItems: "stretch",
                  }}
                ></div>
                <img
                  src={item.img}
                  alt={item.name}
                  className="card-img-top"
                  style={{
                    height: 110,
                    objectFit: "cover",
                    borderRadius: "10px 10px 0 0",
                  }}
                  loading="lazy"
                />
                <div className="card-body d-flex flex-column p-2">
                  <h2
                    className="card-title fw-bold fs-6 mb-0 text-center"
                    style={{ fontFamily: "'Fondamento', cursive", 
                      width: "100%",
                        wordBreak: "break-word",
                        fontSize: "1.05rem",
                        marginBottom: 0,
                    }}
                  >
                    {item.name}
                  </h2>
                </div>
              </article>
            </div>
          ))}
          {paginated.length === 0 && (
            <div className="col-12 text-center text-muted py-5">
              No items found in this section.
            </div>
          )}
        </section>
        {totalPages > 1 && (
          <nav className="mt-4" aria-label="Gallery pagination">
            <ul className="pagination justify-content-center">
              <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
                <button
                  className="page-link"
                  onClick={() => setPage(page - 1)}
                  aria-label="Previous page"
                >
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
                    aria-label={`Page ${idx + 1}`}
                  >
                    {idx + 1}
                  </button>
                </li>
              ))}
              <li
                className={`page-item ${page === totalPages ? "disabled" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => setPage(page + 1)}
                  aria-label="Next page"
                >
                  &raquo;
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
      {modalInfo.show && modalInfo.item && (
        <>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.4)",
              zIndex: 1050,
            }}
            onClick={handleCloseModal}
          />
          <div
            className="modal d-block"
            tabIndex="-1"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              zIndex: 1060,
              overflowY: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={handleCloseModal}
          >
            <div
              className="modal-dialog"
              style={{
                maxWidth: 400,
                margin: "2rem auto",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-content" style={{ borderRadius: 18 }}>
                <div className="modal-header border-0 justify-content-center">
                  <h5
                    className="modal-title fw-bold w-100 text-center"
                    style={{
                      color: "#11998e",
                      fontFamily: "'Fondamento', cursive",
                    }}
                  >
                    {modalInfo.item.name}
                  </h5>
                  <button
                    type="button"
                    className="btn-close position-absolute end-0 me-3"
                    aria-label="Close"
                    onClick={handleCloseModal}
                  ></button>
                </div>
                <div className="modal-body text-center">
                  <img
                    src={modalInfo.item.img}
                    alt={modalInfo.item.name}
                    className="img-fluid mb-3"
                    style={{
                      maxHeight: 220,
                      borderRadius: 12,
                      objectFit: "cover",
                      display: "block",
                      margin: "0 auto",
                    }}
                  />
                  {modalInfo.item.desc && (
                    <p
                      className="mb-3"
                      style={{
                        fontSize: "1.1rem",
                        color: "#555",
                        textAlign: "center",
                        margin: "0 auto",
                        maxWidth: 400,
                      }}
                    >
                      {modalInfo.item.desc}
                    </p>
                  )}
                  {modalInfo.item.price && (
                    <span
                      className="badge rounded-pill px-3 py-2"
                      style={{
                        background: "#fffbe6",
                        color: "#e67e22",
                        fontSize: "1.2rem",
                        border: "1.5px solid #e67e22",
                        display: "block",
                        margin: "0 auto",
                      }}
                    >
                      <i
                        className="bi bi-hammer me-1"
                        style={{ color: "#e67e22" }}
                      ></i>
                      <span className="fw-bold">{modalInfo.item.price}</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default Gallery;
