import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/Searchbar";
import Footer from "../components/Footer";
import AuctionSection from "../components/AuctionSection";
import "./Home.css";
import hero from "../assets/hero.jpg";
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
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import art from "../pages/art.json";
import antiques from "../pages/antiques.json";
import furnitures from "../pages/furnitures.json";
import jewellery from "../pages/jewellery.json";
import collectibles from "../pages/collectibles.json";
import sponsored from "../pages/sponsored.json";

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

const Home = ({ firstName }) => {
  const [modalInfo, setModalInfo] = useState({
    show: false,
    product: null,
    section: null,
  });

  const searchProducts = useMemo(
    () =>
      [...art, ...antiques, ...furnitures, ...jewellery, ...collectibles].map(
        (item) => ({
          ...item,
          name: item.title,
          desc: item.description || item.desc || "",
          price: item.price,
          image: imageMap[item.image] || item.image,
        })
      ),
    [art, antiques, furnitures, jewellery, collectibles]
  );

  const artAuctions = useMemo(
    () =>
      art.map((item) => ({
        ...item,
        image: imageMap[item.image] || item.image,
      })),
    [art]
  );
  const antiqueAuctions = useMemo(
    () =>
      antiques.map((item) => ({
        ...item,
        image: imageMap[item.image] || item.image,
      })),
    [antiques]
  );
  const furnitureAuctions = useMemo(
    () =>
      furnitures.map((item) => ({
        ...item,
        image: imageMap[item.image] || item.image,
      })),
    [furnitures]
  );
  const jewelleryAuctions = useMemo(
    () =>
      jewellery.map((item) => ({
        ...item,
        image: imageMap[item.image] || item.image,
      })),
    [jewellery]
  );
  const collectibleAuctions = useMemo(
    () =>
      collectibles.map((item) => ({
        ...item,
        image: imageMap[item.image] || item.image,
      })),
    [collectibles]
  );
  const sponsoredAuctions = useMemo(
    () =>
      sponsored.map((item) => ({
        ...item,
        image: imageMap[item.image] || item.image,
      })),
    [sponsored]
  );

  const handleCardClick = (product, section) =>
    setModalInfo({ show: true, product, section });
  const handleCloseModal = () =>
    setModalInfo({ show: false, product: null, section: null });

  return (
    <>
      <div
        style={
          modalInfo.show
            ? { filter: "blur(5px)", transition: "filter 0.2s" }
            : {}
        }
      >
        <header
          className="bg-light border-bottom py-4 mb-4"
          style={{
            background: `linear-gradient(rgba(17,153,142,0.18),rgba(17,153,142,0.18)), url(${hero}) center/cover no-repeat`,
            minHeight: 240,
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          <br />
          <br />
          <div className="container-fluid position-relative">
            <div className="row justify-content-center mb-3">
              <div className="col-md-8 d-flex justify-content-center">
                <SearchBar
                  products={searchProducts}
                  onResultClick={(product) =>
                    setModalInfo({ show: true, product, section: null })
                  }
                />
              </div>
            </div>
            <div className="row justify-content-center mb-3">
              <div className="col-4 d-flex justify-content-center">
                <img
                  src={auction1}
                  alt="Auction 1"
                  className="img-fluid w-50 animated-img move-left"
                  style={{ maxWidth: "100px", height: "100px" }}
                />
              </div>
              <div className="col-4 d-flex justify-content-center">
                <img
                  src={auction2}
                  alt="Auction 2"
                  className="img-fluid w-50 animated-img move-up"
                  style={{ maxWidth: "100px", height: "100px" }}
                />
              </div>
              <div className="col-4 d-flex justify-content-center">
                <img
                  src={auction3}
                  alt="Auction 3"
                  className="img-fluid w-50 animated-img move-right"
                  style={{ maxWidth: "100px", height: "100px" }}
                />
              </div>
            </div>
          </div>
        </header>
        <main
          className="position-relative live-bid-main-bg"
          style={{
            width: "100vw",
            maxWidth: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            padding: "32px 0",
            background: "#f8f9fa",
          }}
        >
          <div className="live-bid-main-overlay"></div>
          <h2 className="text-center mb-3" style={{ color: "#11998e" }}>
            {firstName ? `Hello, ${firstName}!` : "Hello, Guest!"}
          </h2>
          <h1
            className="text-center fw-bold mb-2"
            style={{ fontSize: "2.5rem", letterSpacing: "1px" }}
          >
            Welcome to BidSpirit Online Auction Platform
          </h1>
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <p className="lead">
                Your one-stop platform for auctions and collectibles.
              </p>
              <p>Explore our latest auctions and find unique items!</p>
            </div>
          </div>

          {/* Fine Art */}
          <div
            className="my-5 p-4 bg-white rounded shadow-sm"
            style={{ padding: "24px" }}
          >
            <div className="mb-4">
              <div className="d-flex justify-content-center align-items-center gap-2">
                <i
                  className="bi bi-brush"
                  style={{
                    fontSize: "2.2rem",
                    color: "#C85B20",
                    verticalAlign: "middle",
                  }}
                ></i>
                <h2
                  className="fw-bold mb-0"
                  style={{
                    fontSize: "2rem",
                    fontFamily: "Fondamento, cursive",
                    letterSpacing: "1px",
                    color: "black",
                    display: "inline-block",
                    borderBottom: "2px solid rgb(0, 0, 0)",
                  }}
                >
                  Fine Art
                </h2>
              </div>
            </div>
            <div className="row justify-content-center">
              {artAuctions.map((product, idx) => (
                <div
                  className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex"
                  key={idx}
                  style={{ position: "relative" }}
                >
                  <div
                    className="card h-100 w-100 border-0 shadow-sm text-center"
                    onClick={() => handleCardClick(product, "Fine Art")}
                    style={{
                      cursor: "pointer",
                      maxWidth: "210px",
                      margin: "0 auto",
                      minHeight: "320px",
                    }}
                  >
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        background: "#f8f9fa",
                        borderRadius: "12px 12px 0 0",
                        height: "180px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={product.image}
                        className="card-img-top"
                        alt={product.title}
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                          borderRadius: "12px 12px 0 0",
                          boxShadow: "0 4px 16px rgba(67,233,123,0.10)",
                          transition: "box-shadow 0.3s",
                        }}
                      />
                    </div>
                    <div className="card-body py-2">
                      <h5
                        className="card-title mb-1"
                        style={{ fontSize: "1rem" }}
                      >
                        {product.title}
                      </h5>
                    </div>
                    <div className="card-footer bg-transparent border-0 py-2 text-center">
                      <span
                        className="badge rounded-pill px-3 py-2"
                        style={{
                          background: "#fffbe6",
                          color: "#e67e22",
                          fontSize: "0.95rem",
                          border: "1.5px solid #e67e22",
                        }}
                      >
                        <i
                          className="bi bi-hammer me-1"
                          style={{ color: "#e67e22" }}
                        ></i>
                        <span className="fw-bold">{product.price}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-3">
              <Link
                to={`/gallery?tab=Fine Arts`}
                className="btn btn-outline-success px-4 fw-bold"
              >
                See More
              </Link>
            </div>
          </div>

          {/* Antiques */}
          <div
            className="my-5 p-4 bg-white rounded shadow-sm"
            style={{ padding: "24px" }}
          >
            <div className="mb-4">
              <div className="d-flex justify-content-center align-items-center gap-2">
                <i
                  className="bi bi-hourglass-split"
                  style={{
                    fontSize: "2.2rem",
                    color: "#C85B20",
                    verticalAlign: "middle",
                  }}
                ></i>
                <h2
                  className="fw-bold mb-0"
                  style={{
                    fontSize: "2rem",
                    fontFamily: "Fondamento, cursive",
                    letterSpacing: "1px",
                    color: "black",
                    display: "inline-block",
                    borderBottom: "2px solid rgb(0, 0, 0)",
                  }}
                >
                  Antiques
                </h2>
              </div>
            </div>
            <div className="row justify-content-center">
              {antiqueAuctions.map((product, idx) => (
                <div
                  className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex"
                  key={idx}
                  style={{ position: "relative" }}
                >
                  <div
                    className="card h-100 w-100 border-0 shadow-sm text-center"
                    onClick={() => handleCardClick(product, "Antiques")}
                    style={{
                      cursor: "pointer",
                      maxWidth: "210px",
                      margin: "0 auto",
                      minHeight: "320px",
                    }}
                  >
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        background: "#f8f9fa",
                        borderRadius: "12px 12px 0 0",
                        height: "180px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={product.image}
                        className="card-img-top"
                        alt={product.title}
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                          borderRadius: "12px 12px 0 0",
                          boxShadow: "0 4px 16px rgba(67,233,123,0.10)",
                          transition: "box-shadow 0.3s",
                        }}
                      />
                    </div>
                    <div className="card-body py-2">
                      <h5
                        className="card-title mb-1"
                        style={{ fontSize: "1rem" }}
                      >
                        {product.title}
                      </h5>
                    </div>
                    <div className="card-footer bg-transparent border-0 py-2 text-center">
                      <span
                        className="badge rounded-pill px-3 py-2"
                        style={{
                          background: "#fffbe6",
                          color: "#e67e22",
                          fontSize: "0.95rem",
                          border: "1.5px solid #e67e22",
                        }}
                      >
                        <i
                          className="bi bi-hammer me-1"
                          style={{ color: "#e67e22" }}
                        ></i>
                        <span className="fw-bold">{product.price}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-3">
              <Link
                to={`/gallery?tab=Antiques`}
                className="btn btn-outline-success px-4 fw-bold"
              >
                See More
              </Link>
            </div>
          </div>

          {/* Furnitures */}
          <div
            className="my-5 p-4 bg-white rounded shadow-sm"
            style={{ padding: "24px" }}
          >
            <div className="mb-4">
              <div className="d-flex justify-content-center align-items-center gap-2">
                <i
                  className="bi bi-door-closed"
                  style={{
                    fontSize: "2.2rem",
                    color: "#C85B20",
                    verticalAlign: "middle",
                  }}
                ></i>
                <h2
                  className="fw-bold mb-0"
                  style={{
                    fontSize: "2rem",
                    fontFamily: "Fondamento, cursive",
                    letterSpacing: "1px",
                    color: "black",
                    display: "inline-block",
                    borderBottom: "2px solid rgb(0, 0, 0)",
                  }}
                >
                  Furnitures
                </h2>
              </div>
            </div>
            <div className="row justify-content-center">
              {furnitureAuctions.map((product, idx) => (
                <div
                  className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex"
                  key={idx}
                  style={{ position: "relative" }}
                >
                  <div
                    className="card h-100 w-100 border-0 shadow-sm text-center"
                    onClick={() => handleCardClick(product, "Furnitures")}
                    style={{
                      cursor: "pointer",
                      maxWidth: "210px",
                      margin: "0 auto",
                      minHeight: "320px",
                    }}
                  >
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        background: "#f8f9fa",
                        borderRadius: "12px 12px 0 0",
                        height: "180px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={product.image}
                        className="card-img-top"
                        alt={product.title}
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                          borderRadius: "12px 12px 0 0",
                          boxShadow: "0 4px 16px rgba(67,233,123,0.10)",
                          transition: "box-shadow 0.3s",
                        }}
                      />
                    </div>
                    <div className="card-body py-2">
                      <h5
                        className="card-title mb-1"
                        style={{ fontSize: "1rem" }}
                      >
                        {product.title}
                      </h5>
                    </div>
                    <div className="card-footer bg-transparent border-0 py-2 text-center">
                      <span
                        className="badge rounded-pill px-3 py-2"
                        style={{
                          background: "#fffbe6",
                          color: "#e67e22",
                          fontSize: "0.95rem",
                          border: "1.5px solid #e67e22",
                        }}
                      >
                        <i
                          className="bi bi-hammer me-1"
                          style={{ color: "#e67e22" }}
                        ></i>
                        <span className="fw-bold">{product.price}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-3">
              <Link
                to={`/gallery?tab=Furnitures`}
                className="btn btn-outline-success px-4 fw-bold"
              >
                See More
              </Link>
            </div>
          </div>

          {/* Jewelleries */}
          <div
            className="my-5 p-4 bg-white rounded shadow-sm"
            style={{ padding: "24px" }}
          >
            <div className="mb-4">
              <div className="d-flex justify-content-center align-items-center gap-2">
                <i
                  className="bi bi-gem"
                  style={{
                    fontSize: "2.2rem",
                    color: "#C85B20",
                    verticalAlign: "middle",
                  }}
                ></i>
                <h2
                  className="fw-bold mb-0"
                  style={{
                    fontSize: "2rem",
                    fontFamily: "Fondamento, cursive",
                    letterSpacing: "1px",
                    color: "black",
                    display: "inline-block",
                    borderBottom: "2px solid rgb(0, 0, 0)",
                  }}
                >
                  Jewelleries
                </h2>
              </div>
            </div>
            <div className="row justify-content-center">
              {jewelleryAuctions.map((product, idx) => (
                <div
                  className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex"
                  key={idx}
                  style={{ position: "relative" }}
                >
                  <div
                    className="card h-100 w-100 border-0 shadow-sm text-center"
                    onClick={() => handleCardClick(product, "Jewelleries")}
                    style={{
                      cursor: "pointer",
                      maxWidth: "210px",
                      margin: "0 auto",
                      minHeight: "320px",
                    }}
                  >
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        background: "#f8f9fa",
                        borderRadius: "12px 12px 0 0",
                        height: "180px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={product.image}
                        className="card-img-top"
                        alt={product.title}
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                          borderRadius: "12px 12px 0 0",
                          boxShadow: "0 4px 16px rgba(67,233,123,0.10)",
                          transition: "box-shadow 0.3s",
                        }}
                      />
                    </div>
                    <div className="card-body py-2">
                      <h5
                        className="card-title mb-1"
                        style={{ fontSize: "1rem" }}
                      >
                        {product.title}
                      </h5>
                    </div>
                    <div className="card-footer bg-transparent border-0 py-2 text-center">
                      <span
                        className="badge rounded-pill px-3 py-2"
                        style={{
                          background: "#fffbe6",
                          color: "#e67e22",
                          fontSize: "0.95rem",
                          border: "1.5px solid #e67e22",
                        }}
                      >
                        <i
                          className="bi bi-hammer me-1"
                          style={{ color: "#e67e22" }}
                        ></i>
                        <span className="fw-bold">{product.price}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-3">
              <Link
                to={`/gallery?tab=Jewelleries`}
                className="btn btn-outline-success px-4 fw-bold"
              >
                See More
              </Link>
            </div>
          </div>

          {/* Collectibles */}
          <div
            className="my-5 p-4 bg-white rounded shadow-sm"
            style={{ padding: "24px" }}
          >
            <div className="mb-4">
              <div className="d-flex justify-content-center align-items-center gap-2">
                <i
                  className="bi bi-box-seam"
                  style={{
                    fontSize: "2.2rem",
                    color: "#C85B20",
                    verticalAlign: "middle",
                  }}
                ></i>
                <h2
                  className="fw-bold mb-0"
                  style={{
                    fontSize: "2rem",
                    fontFamily: "Fondamento, cursive",
                    letterSpacing: "1px",
                    color: "black",
                    display: "inline-block",
                    borderBottom: "2px solid rgb(0, 0, 0)",
                  }}
                >
                  Collectibles
                </h2>
              </div>
            </div>
            <div className="row justify-content-center">
              {collectibleAuctions.map((product, idx) => (
                <div
                  className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex"
                  key={idx}
                  style={{ position: "relative" }}
                >
                  <div
                    className="card h-100 w-100 border-0 shadow-sm text-center"
                    onClick={() => handleCardClick(product, "Collectibles")}
                    style={{
                      cursor: "pointer",
                      maxWidth: "210px",
                      margin: "0 auto",
                      minHeight: "320px",
                    }}
                  >
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        background: "#f8f9fa",
                        borderRadius: "12px 12px 0 0",
                        height: "180px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={product.image}
                        className="card-img-top"
                        alt={product.title}
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                          borderRadius: "12px 12px 0 0",
                          boxShadow: "0 4px 16px rgba(67,233,123,0.10)",
                          transition: "box-shadow 0.3s",
                        }}
                      />
                    </div>
                    <div className="card-body py-2">
                      <h5
                        className="card-title mb-1"
                        style={{ fontSize: "1rem" }}
                      >
                        {product.title}
                      </h5>
                    </div>
                    <div className="card-footer bg-transparent border-0 py-2 text-center">
                      <span
                        className="badge rounded-pill px-3 py-2"
                        style={{
                          background: "#fffbe6",
                          color: "#e67e22",
                          fontSize: "0.95rem",
                          border: "1.5px solid #e67e22",
                        }}
                      >
                        <i
                          className="bi bi-hammer me-1"
                          style={{ color: "#e67e22" }}
                        ></i>
                        <span className="fw-bold">{product.price}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-3">
              <Link
                to={`/gallery?tab=Collectibles`}
                className="btn btn-outline-success px-4 fw-bold"
              >
                See More
              </Link>
            </div>
          </div>

          {/* Sponsored Auctions */}
          <div
            className="my-5 p-4 bg-white rounded shadow-sm"
            style={{ padding: "24px" }}
          >
            <div className="mb-4">
              <div className="d-flex justify-content-center align-items-center gap-2">
                <i
                  className="bi bi-star-fill"
                  style={{
                    fontSize: "2.2rem",
                    color: "#f1c40f",
                    verticalAlign: "middle",
                  }}
                ></i>
                <h2
                  className="fw-bold mb-0"
                  style={{
                    fontFamily: "Fondamento, cursive",
                    fontSize: "2rem",
                    letterSpacing: "1px",
                    color: "black",
                    display: "inline-block",
                    border: "2px solid rgb(0, 0, 0)",
                    borderRadius: "9px",
                    padding: "0.5rem 1rem",
                  }}
                >
                  Sponsored Auctions
                </h2>
              </div>
            </div>
            <div className="row justify-content-center">
              {sponsoredAuctions.map((auction, idx) => (
                <div
                  key={auction.id || idx}
                  className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex"
                  style={{ position: "relative" }}
                >
                  <div
                    className="card h-100 w-100 border-0 shadow-sm text-center"
                    onClick={() =>
                      handleCardClick(auction, "Sponsored Auctions")
                    }
                    style={{
                      cursor: "pointer",
                      maxWidth: "210px",
                      margin: "0 auto",
                      minHeight: "320px",
                    }}
                  >
                    <div className="bg-danger text-white py-1 fw-semibold rounded-top">
                      {auction.status}
                    </div>
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        background: "#f8f9fa",
                        borderRadius: "0 0 12px 12px",
                        height: "180px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={auction.image}
                        className="card-img-top img-fluid p-3"
                        alt={auction.title}
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                          borderRadius: "0 0 12px 12px",
                        }}
                      />
                    </div>
                    <div className="card-body d-flex flex-column">
                      <h6
                        className="card-title fw-bold mb-2"
                        style={{ fontSize: "1rem" }}
                      >
                        {auction.title}
                      </h6>
                      <a href="#" className="btn btn-warning mt-auto fw-bold">
                        Visit Shop
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
        <AuctionSection />
        <Footer/>
      </div>
      {modalInfo.show && modalInfo.product && (
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
                    style={{ color: "#11998e" }}
                  >
                    {modalInfo.product.title}
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
                    src={modalInfo.product.image}
                    alt={modalInfo.product.title}
                    className="img-fluid mb-3"
                    style={{
                      maxHeight: 220,
                      borderRadius: 12,
                      objectFit: "cover",
                      display: "block",
                      margin: "0 auto",
                    }}
                  />
                  {modalInfo.product.description && (
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
                      {modalInfo.product.description}
                    </p>
                  )}
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
                    <span className="fw-bold">{modalInfo.product.price}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
         
        </>
      )}
    </>
  );
};

export default Home;
