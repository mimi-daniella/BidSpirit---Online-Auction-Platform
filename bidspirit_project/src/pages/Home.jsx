import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SearchBar from "../components/Searchbar";
import AuctionSection from "../components/AuctionSection";
import "./Home.css";
import "./HomeLiveBg.css";
import img6 from "../assets/img6.jpg"; // Or any relevant image
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
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

const ProductPopover = ({ product, onClose }) => (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 20,
      width: "100%",
      height: "100%",
      background: "rgba(255,255,255,0.98)",
      borderRadius: "12px",
      boxShadow: "0 8px 32px rgba(67,233,123,0.18)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "1.5rem"
    }}
  >
    <button
      type="button"
      className="btn-close ms-auto"
      aria-label="Close"
      onClick={onClose}
      style={{ position: "absolute", right: 12, top: 12, zIndex: 2 }}
    ></button>
    <img
      src={product.img}
      alt={product.name}
      className="img-fluid mb-3"
      style={{ maxHeight: "200px", borderRadius: "12px", objectFit: "cover" }}
    />
    <h5 className="fw-bold mb-2" style={{ color: "#11998e" }}>{product.name}</h5>
    <p className="mb-3" style={{ fontSize: "1.1rem", color: "#555" }}>{product.desc}</p>
    <span className="badge rounded-pill px-3 py-2" style={{ background: "#fffbe6", color: "#e67e22", fontSize: "1.2rem", border: "1.5px solid #e67e22" }}>
      <i className="bi bi-hammer me-1" style={{ color: "#e67e22" }}></i>
      <span className="fw-bold">{product.price}</span>
    </span>
  </div>
);

const auctionData = [
  {
    id: 1,
    title: "Atticus Furnitures",
    image: sponsored1,
    timeLeft: "⏰ 11 hours",
  },
  {
    id: 2,
    title: "Vintyland Art-Collectors",
    image: sponsored2,
    timeLeft: "⏰ 25 mins",
  },
  {
    id: 3,
    title: "Duke’s Antiques",
    image: sponsored3,
    timeLeft: "⏰ Now 🔥",
  },
  {
    id: 4,
    title: "Almaira Jewellers",
    image: sponsored4,
    timeLeft: "⏰ Tomorrow...",
  },
];

const auctionSections = [
  {
    title: "Fine Art",
    icon: "bi-brush",
    products: [
      {
        img: img1,
        name: "Gladice Painting",
        price: "$1,200",
        desc: "A beautiful painting by Carla Barry-Esteban, capturing the raw and unfiltered side of everyday life."
      },
      {
        img: img2,
        name: "The Limn Painting",
        price: "$2,000",
        desc: "This is a line art portait that emphasizes fluidity and the essence of form, often creating a sense of movement and connection between the subjects."
      },
      {
        img: img3,
        name: "African Art Contemporary CANVAS PRINT Living Room Wall Art",
        price: "$3,000",
        desc: "A cultural art by Odumegwu Obinna. It features a striking and vibrant design, showcasing a fusion of traditional African art and contemporary aesthetics."
      },
      {
        img: img4,
        name: "Leopard Acrylic Painting",
        price: "$1,500",
        desc: "A stunning acrylic painting of a leopard, capturing its grace and power."
      }
    ]
  },
  {
    title: "Antiques",
    icon: "bi-hourglass-split",
    products: [
      {
        img: antique1,
        name: "Vintage Antique Brass Telescope",
        price: "$800",
        desc: "A beautiful brass telescope with a tripod stand, often used for stargazing or terrestrial viewing."
      },
      {
        img: antique2,
        name: "J.W. Benson pocket watch",
        price: "$1,200",
        desc: "A classic pocket watch by J.W. Benson, known for its craftsmanship and timeless design."
      },
      {
        img: antique3,
        name: "Jingdezhen Antique Longevity Porcelain Enamel Floor Vase",
        price: "$600",
        desc: "A stunning porcelain vase from Jingdezhen, known for its intricate designs and vibrant colors, reminiscent of traditional Chinese."
      },
      {
        img: antique4,
        name: "Agfa Billy Record 8.8 Camera",
        price: "$1,000",
        desc: "A vintage Agfa camera, perfect for collectors and photography enthusiasts."
      }
    ]
  },
  {
    title: "Furnitures",
    icon: "bi-door-closed",
    products: [
      {
        img: furniture1,
        name: "Coaster Aylin Rocking Chair",
        price: "$450",
        desc: "A stylish and comfortable rocking chair, perfect for any living room or nursery."
      },
      {
        img: furniture2,
        name: "Art Deco Round Coffee Table",
        price: "$350",
        desc: "A sleek coffee table with a mid-century modern design, ideal for contemporary interiors."
      },
      {
        img: furniture3,
        name: "Antique Oak Fancy Ladies Desk with Curio Cabinets",
        price: "$800",
        desc: "An elegant antique oak desk with intricate carvings and curio cabinets, perfect for a home office or study."
      },
      {
        img: furniture4,
        name: "Royal Choice Furniture sofa",
        price: "$1,200",
        desc: "A luxurious sofa with plush upholstery and a classic design, ideal for any living space."
      }
    ]
  },
  {
    title: "Jewelleries",
    icon: "bi-gem",
    products: [
      {
        img: jewel1,
        name: "Nixon 51-30 Chrono watch",
        price: "$2,500",
        desc: "A stylish and durable watch with a chronograph feature, perfect for everyday wear."
      },
      {
        img: jewel2,
        name: "Diamond Teardrop Earrings",
        price: "$300",
        desc: "Stunning teardrop earrings adorned with diamonds, perfect for special occasions."
      },
      {
        img: jewel3,
        name: "Mystic Topaz Ring",
        price: "$1,000",
        desc: "A beautiful ring featuring a mystic topaz stone, known for its vibrant colors and unique appearance."
      },
      {
        img: jewel4,
        name: "Viking bracelet",
        price: "$400",
        desc: "A handcrafted Viking-style bracelet made from high-quality materials, perfect for collectors and enthusiasts."
      }
    ]
  },
  {
    title: "Collectibles",
    icon: "bi-box-seam",
    products: [
      {
        img: collectible1,
        name: "German postage stamps",
        price: "$150",
        desc: "A collection of rare German postage stamps, perfect for philatelists and collectors."
      },
      {
        img: collectible2,
        name: "QF Handmade Blown Glass Art Blue Bird Figurine",
        price: "$200",
        desc: "A selection of vintage vinyl records from various artists, ideal for music lovers and collectors."
      },
      {
        img: collectible3,
        name: "Action Comics #1",
        price: "$120",
        desc: "A set of limited edition action figures from popular franchises, perfect for collectors and fans."
      },
      {
        img: collectible4,
        name: "Lego Minifigures Collection",
        price: "$300",
        desc: "A collection of rare comic books, featuring iconic characters and storylines."
      }
    ]
  }
];

const Home = ({ onAuthClick, firstName }) => {
  // Add at the top inside your Home component
  const [showSellerModal, setShowSellerModal] = useState(false);

  const [modalInfo, setModalInfo] = useState({ show: false, product: null, section: null });

  const handleCardClick = (product, section) => {
    setModalInfo({ show: true, product, section });
  };

  const handleCloseModal = () => {
    setModalInfo({ show: false, product: null, section: null });
  };

  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();

  const now = new Date();
  const localTime = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const localDate = now.toLocaleDateString("en-GB");

  useEffect(() => {
    if (inView) {
      controlsLeft.start({
        x: 0,
        opacity: 1,
        transition: { type: "tween", duration: 0.8 },
      });
      controlsRight.start({
        x: 0,
        opacity: 1,
        transition: { type: "tween", duration: 0.8 },
      });
    } else {
      controlsLeft.start({
        x: "-100vw",
        opacity: 0,
        transition: { duration: 0.5 },
      });
      controlsRight.start({
        x: "100vw",
        opacity: 0,
        transition: { duration: 0.5 },
      });
    }
  }, [inView, controlsLeft, controlsRight]);

  return (
    <>
      <div className="live-bid-site-bg"></div>

      <header className="bg-light border-bottom py-4 mb-4 live-green-bg live-bid-navbar-bg">
        <div className="live-bid-navbar-overlay"></div>
        <div className="container-fluid position-relative">
          <div className="row justify-content-center mb-3">
            <div className="col-md-8 d-flex justify-content-center">
              <SearchBar
                products={[
                  ...auctionSections.flatMap((s) => s.products),
                ]}
                onResultClick={(product) => setModalInfo({ show: true, product })}
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

      <main className="position-relative live-bid-main-bg" style={{ width: "100vw", maxWidth: "100%", left: "50%", transform: "translateX(-50%)" }}>
        <div className="live-bid-main-overlay"></div>
        <h2 className="text-center mb-3" style={{ color: "#11998e" }}>
          {firstName ? `Hello, ${firstName}!` : "Hello, Guest!"}
        </h2>
        <h1 className="text-center fw-bold mb-2" style={{ fontSize: "2.5rem", letterSpacing: "1px" }}>
          Welcome to BidSpirit Online Auction Platform
        </h1>
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <p className="lead">Your one-stop platform for auctions and collectibles.</p>
            <p>Explore our latest auctions and find unique items!</p>
          </div>
        </div>

        <div className="my-5 p-4 bg-white rounded shadow-sm">
          <div className="mb-4">
            <div className="d-flex justify-content-center align-items-center gap-2">
              <i className={`bi ${auctionSections[0].icon}`} style={{ fontSize: "2.2rem", color: "#43e97b", verticalAlign: "middle" }}></i>
              <h2
                className="fw-bold mb-0"
                style={{
                  fontSize: "2rem",
                  letterSpacing: "1px",
                  color: "black",
                  display: "inline-block",
                  borderBottom: "2px solid rgb(0, 0, 0)",
                }}
              >
                {auctionSections[0].title}
              </h2>
            </div>
            <div className="d-flex justify-content-center"></div>
          </div>
          <div className="row justify-content-center">
            {auctionSections[0].products.map((product, idx) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex" key={idx} style={{ position: "relative" }}>
                <div className="card h-100 w-100 border-0 shadow-sm text-center">
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ background: "#f8f9fa", borderRadius: "12px 12px 0 0", cursor: "pointer", height: "340px", overflow: "hidden" }}
                    onClick={() => handleCardClick(product, auctionSections[0])}
                  >
                    <img
                      src={product.img}
                      className="card-img-top"
                      alt={product.name}
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: "12px 12px 0 0",
                        boxShadow: "0 4px 16px rgba(67,233,123,0.10)",
                        transition: "box-shadow 0.3s"
                      }}
                    />
                  </div>
                  <div className="card-footer bg-transparent border-0 py-2 text-center">
                    <span className="badge rounded-pill px-3 py-2" style={{ background: "#fffbe6", color: "#e67e22", fontSize: "1.1rem", border: "1.5px solid #e67e22" }}>
                      <i className="bi bi-hammer me-1" style={{ color: "#e67e22" }}></i>
                      <span className="fw-bold">{product.price}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-3">
            <Link
              to={`/gallery?tab=Fine Arts`} // or use the section name dynamically
              className="btn btn-outline-success px-4 fw-bold"
            >
              See More
            </Link>
          </div>
        </div>

        <div className="my-5 p-4 bg-white rounded shadow-sm">
          <div className="mb-4">
            <div className="d-flex justify-content-center align-items-center gap-2">
              <i className={`bi ${auctionSections[1].icon}`} style={{ fontSize: "2.2rem", color: "#43e97b", verticalAlign: "middle" }}></i>
              <h2
                className="fw-bold mb-0"
                style={{
                  fontSize: "2rem",
                  letterSpacing: "1px",
                  color: "black",
                  display: "inline-block",
                  borderBottom: "2px solid rgb(0, 0, 0)"
                }}
              >
                {auctionSections[1].title}
              </h2>
            </div>
            <div className="d-flex justify-content-center"></div>
          </div>
          <div className="row justify-content-center">
            {auctionSections[1].products.map((product, idx) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex" key={idx} style={{ position: "relative" }}>
                <div className="card h-100 w-100 border-0 shadow-sm text-center">
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ background: "#f8f9fa", borderRadius: "12px 12px 0 0", cursor: "pointer", height: "340px", overflow: "hidden" }}
                    onClick={() => handleCardClick(product, auctionSections[1])}
                  >
                    <img
                      src={product.img}
                      className="card-img-top"
                      alt={product.name}
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: "12px 12px 0 0",
                        boxShadow: "0 4px 16px rgba(67,233,123,0.10)",
                        transition: "box-shadow 0.3s"
                      }}
                    />
                  </div>
                  <div className="card-footer bg-transparent border-0 py-2 text-center">
                    <span className="badge rounded-pill px-3 py-2" style={{ background: "#fffbe6", color: "#e67e22", fontSize: "1.1rem", border: "1.5px solid #e67e22" }}>
                      <i className="bi bi-hammer me-1" style={{ color: "#e67e22" }}></i>
                      <span className="fw-bold">{product.price}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-3">
            <Link
              to={`/gallery?tab=Fine Arts`} // or use the section name dynamically
              className="btn btn-outline-success px-4 fw-bold"
            >
              See More
            </Link>
          </div>
        </div>

        <div className="row my-4" ref={ref}>
          <motion.div
            className="col-12 col-md-6 mb-3 mb-md-0"
            initial={{ x: "-100vw", opacity: 0 }}
            animate={controlsLeft}
            exit={{ x: "-100vw", opacity: 0 }}
          >
            <div
              className="p-0 rounded shadow-sm h-100 d-flex flex-row align-items-stretch position-relative"
              style={{
                background: "rgba(67,233,123,0.18)",
                minHeight: "260px",
                overflow: "hidden"
              }}
            >
              <div className="d-flex flex-column justify-content-center align-items-start p-4" style={{ flex: 1, zIndex: 2 }}>
                <i className="bi bi-truck display-5 text-success mb-2"></i>
                <h4 className="fw-bold text-success mb-2">Free Delivery</h4>
                <p className="mb-3 text-dark fw-semibold" style={{ fontSize: "1.08rem" }}>
                  Enjoy fast, secure, and reliable shipping for every auction win. We deliver your treasures to your doorstep at no extra cost, anywhere in the country!
                </p>
                <button className="btn btn-success px-4 py-2 fw-bold shadow-sm">
                  Learn More
                </button>
              </div>
              <div
                style={{
                  flex: 1,
                  backgroundImage: "url('/images/delivery vehicle.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "260px"
                }}
              ></div>
            </div>
          </motion.div>
          <motion.div
            className="col-12 col-md-6"
            initial={{ x: "100vw", opacity: 0 }}
            animate={controlsRight}
            exit={{ x: "100vw", opacity: 0 }}
          >
            <div
              className="p-0 rounded shadow-sm h-100 d-flex flex-row align-items-stretch position-relative"
              style={{
                background: "rgba(30,144,255,0.15)",
                minHeight: "260px",
                overflow: "hidden"
              }}
            >
              <div className="d-flex flex-column justify-content-center align-items-start p-4" style={{ flex: 1, zIndex: 2 }}>
                <i className="bi bi-shield-check display-5 text-info mb-2"></i>
                <h4 className="fw-bold text-info mb-2">Bid Insurance</h4>
                <p className="mb-3 text-dark fw-semibold" style={{ fontSize: "1.08rem" }}>
                  Bid with confidence! Our Bid Insurance protects your bids and ensures a safe, worry-free auction experience. Your investment is always secure.
                </p>
                <button className="btn btn-info px-4 py-2 fw-bold shadow-sm text-white">
                  Get Protected
                </button>
              </div>
              <div
                style={{
                  flex: 1,
                  backgroundImage: "url('/images/Insurance_broker_illustration_exclusive_design_inspiration___Premium_Vector-removebg-preview.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "260px"
                }}
              ></div>
            </div>
          </motion.div>
        </div>

        <div className="my-5 p-4 bg-white rounded shadow-sm">
          <div className="mb-4">
            <div className="d-flex justify-content-center align-items-center gap-2">
              <i className="bi bi-star-fill" style={{ fontSize: "2.2rem", color: "#f1c40f", verticalAlign: "middle" }}></i>
              <style>
                {`@import url('https://fonts.googleapis.com/css2?family=Fondamento:ital@0;1&display=swap');`}
              </style>
              <h2
                className="fw-bold mb-0"
                style={{
                  fontFamily: "fondamento, cursive",
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
            <div className="d-flex justify-content-center"></div>
          </div>
          <div className="row justify-content-center">
            {auctionData.map((auction) => (
              <div key={auction.id} className="col-12 col-sm-6 col-md-3 mb-4 d-flex">
                <div className="card h-100 w-100 shadow-sm text-center">
                  <div className="bg-danger text-white py-1 fw-semibold rounded-top">
                    {auction.timeLeft}
                  </div>
                  <img
                    src={auction.image}
                    className="card-img-top img-fluid p-3"
                    alt={auction.title}
                    style={{ height: "180px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h6 className="card-title fw-bold mb-2">{auction.title}</h6>
                    <a href="#" className="btn btn-warning mt-auto fw-bold">
                      Visit Shop
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {auctionSections.slice(2).map((section, sectionIdx) => (
          <div className="my-5 p-4 bg-white rounded shadow-sm" key={section.title}>
            <div className="mb-4">
              <div className="d-flex justify-content-center align-items-center gap-2">
                <i className={`bi ${section.icon}`} style={{ fontSize: "2.2rem", color: "#43e97b", verticalAlign: "middle" }}></i>
                <h2
                  className="fw-bold mb-0"
                  style={{
                    fontSize: "2rem",
                    letterSpacing: "1px",
                    color: "black",
                    display: "inline-block",
                    borderBottom: "2px solid rgb(0, 0, 0)"
                  }}
                >
                  {section.title}
                </h2>
              </div>
              <div className="d-flex justify-content-center"></div>
            </div>
            <div className="row justify-content-center">
              {section.products.map((product, idx2) => (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex" key={idx2} style={{ position: "relative" }}>
                  <div className="card h-100 w-100 border-0 shadow-sm text-center">
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{ background: "#f8f9fa", borderRadius: "12px 12px 0 0", cursor: "pointer", height: "340px", overflow: "hidden" }}
                      onClick={() => handleCardClick(product, section)}
                    >
                      <img
                        src={product.img}
                        className="card-img-top"
                        alt={product.name}
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                          borderRadius: "12px 12px 0 0",
                          boxShadow: "0 4px 16px rgba(67,233,123,0.10)",
                          transition: "box-shadow 0.3s"
                        }}
                      />
                    </div>
                    <div className="card-footer bg-transparent border-0 py-2 text-center">
                      <span className="badge rounded-pill px-3 py-2" style={{ background: "#fffbe6", color: "#e67e22", fontSize: "1.1rem", border: "1.5px solid #e67e22" }}>
                        <i className="bi bi-hammer me-1" style={{ color: "#e67e22" }}></i>
                        <span className="fw-bold">{product.price}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-3">
              <Link
              to={`/gallery?tab=Fine Arts`} // or use the section name dynamically
              className="btn btn-outline-success px-4 fw-bold"
              >
              See More
              </Link>
            </div>
          </div>
        ))}
      </main>
      
      <AuctionSection />

<div
  className="bg-light py-5 my-5"
  style={{
    background: "linear-gradient(90deg, #f1f2b5 0%,rgb(0, 248, 174) 50%,rgb(66, 243, 128) 100%)",
    color: "#135058",
    borderRadius: "18px",
    boxShadow: "0 4px 24px rgba(67,233,123,0.08)"
  }}
>
  <div className="container">
    <div className="row align-items-center flex-column-reverse flex-md-row">
      <div className="col-12 col-md-6 text-center text-md-start mt-4 mt-md-0">
        <h2 className="fw-bold mb-3" style={{ color: "black", fontSize: "2.2rem" }}>
          Join the <span style={{ color: "#11998e" }}>Auction Revolution!</span>
        </h2>
        <p className="mb-4 fs-5">
          BidSpirit is your gateway to a world of unique items and thrilling auctions.<br />
          Sign up today and start bidding!
        </p>
        <div className="row justify-content-center mb-4">
          <div className="col-12 col-sm-4 mb-3 mb-sm-0">
            <div className="d-flex flex-column align-items-center">
              <i className="bi bi-shield-lock-fill fs-1 mb-2" style={{ color: "#43e97b" }}></i>
              <span className="fw-semibold">Secure Payments</span>
            </div>
          </div>
          <div className="col-12 col-sm-4 mb-3 mb-sm-0">
            <div className="d-flex flex-column align-items-center">
              <i className="bi bi-person-check-fill fs-1 mb-2" style={{ color: "#2980b9" }}></i>
              <span className="fw-semibold">Verified Sellers</span>
            </div>
          </div>
          <div className="col-12 col-sm-4">
            <div className="d-flex flex-column align-items-center">
              <i className="bi bi-headset fs-1 mb-2" style={{ color: "#e67e22" }}></i>
              <span className="fw-semibold">24/7 Support</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded shadow-sm py-3 px-4 mb-3 d-inline-block">
          <span className="fw-bold" style={{ color: "#43e97b", fontSize: "1.2rem" }}>
            <i className="bi bi-people-fill me-2"></i>10,000+ Happy Bidders
          </span>
          <span className="mx-3 text-muted">|</span>
          <span className="fw-bold" style={{ color: "#2980b9", fontSize: "1.2rem" }}>
            <i className="bi bi-hammer me-2"></i>100+ Auctions Weekly
          </span>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-start gap-3 mt-3">
          <Link to="/auth" className="btn btn-success px-4 py-2 fw-bold">
            <i className="bi bi-person-plus me-2"></i>Sign Up Now
          </Link>
          <button
            className="btn btn-outline-primary px-4 py-2 fw-bold d-flex align-items-center"
            type="button"
            onClick={() => setShowSellerModal(true)}
          >
            <i className="bi bi-shop-window me-2"></i>
            Become a Seller
            <span className="badge bg-success ms-2" style={{ fontSize: "0.9em" }}>
              Trusted
            </span>
          </button>
        </div>
      </div>
      <div className="col-12 col-md-6 text-center">
        <img
          src={img6}
          alt="Join Auction"
          className="img-fluid"
          style={{
            maxHeight: 320,
            borderRadius: 18,
            boxShadow: "0 8px 32px rgba(67,233,123,0.13)",
            objectFit: "cover",
            width: "100%",
            marginBottom: "1rem"
          }}
        />
      </div>
    </div>
  </div>
</div>

      <footer className="bg-dark text-white mt-5 pt-4 pb-2 border-top border-success" style={{ letterSpacing: ".01em" }}>
        <div className="container">
          <div className="row text-center text-md-start">
            <div className="col-md-4 mb-3">
              <h6 className="fw-bold text-success mb-3">About BidSpirit</h6>
              <p className="small text-white-50 mb-2">
                BidSpirit is Nigeria’s trusted online auction platform for art, antiques, collectibles, and more. Join thousands of bidders and sellers nationwide!
              </p>
              <div className="d-flex gap-3 justify-content-center justify-content-md-start mt-3">
                <a href="#" className="text-white-50 fs-5"><i className="bi bi-instagram"></i></a>
                <a href="#" className="text-white-50 fs-5"><i className="bi bi-x"></i></a>
                <a href="#" className="text-white-50 fs-5"><i className="bi bi-linkedin"></i></a>
                <a href="#" className="text-white-50 fs-5"><i className="bi bi-youtube"></i></a>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <h6 className="fw-bold text-success mb-3">Quick Links</h6>
              <ul className="list-unstyled small">
                <li><a href="#" className="text-white-50 text-decoration-none">About Us</a></li>
                <li><a href="#" className="text-white-50 text-decoration-none">Feedback</a></li>
                <li><a href="#" className="text-white-50 text-decoration-none">Contact Us</a></li>
                <li><a href="#" className="text-white-50 text-decoration-none">Shops</a></li>
              </ul>
            </div>
            <div className="col-md-4 mb-3">
              <h6 className="fw-bold text-success mb-3">Auctions</h6>
              <ul className="list-unstyled small">
                <li><a href="#" className="text-white-50 text-decoration-none">Upcoming Auctions</a></li>
                <li><a href="#" className="text-white-50 text-decoration-none">Live Auctions</a></li>
                <li><a href="#" className="text-white-50 text-decoration-none">Completed Auctions</a></li>
                <li><a href="#" className="text-white-50 text-decoration-none">Watchlist</a></li>
              </ul>
            </div>
          </div>
          <div className="row align-items-center mt-3">
            <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
              <span className="small text-white-50">
                &copy; 2025 <span className="fw-bold text-success">BidSpirit.co</span>. All rights reserved.
              </span>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <span className="small text-white-50">
                Powered by <span className="fw-bold text-success">BidSpirit Technologies</span>
              </span>
            </div>
          </div>
        </div>
      </footer>

      <div
        className="bg-gradient"
        style={{
          background: "linear-gradient(90deg, #43e97b 0%, #38f9d7 100%)",
          color: "#135058",
          fontWeight: 500,
          letterSpacing: ".04em",
          fontSize: "1.05rem",
          borderTop: "2px solid #11998e",
          boxShadow: "0 -2px 12px rgba(67,233,123,0.10)"
        }}
      >
      </div>

      {modalInfo.show && modalInfo.product && (
        <div
          className="modal fade show"
          tabIndex="-1"
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-modal-title"
          style={{
            display: "block",
            backgroundColor: "rgba(0,0,0,0.5)",
            animation: "fadeInBg 0.3s"
          }}
          onKeyDown={e => { if (e.key === "Escape") handleCloseModal(); }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content" style={{ animation: "fadeInModal 0.3s" }}>
              <div className="modal-header border-0">
                <h5 className="modal-title fw-bold" id="product-modal-title" style={{ color: "#11998e" }}>
                  {modalInfo.product.name}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body text-center">
                <img
                  src={modalInfo.product.img}
                  alt={modalInfo.product.name}
                  className="img-fluid mb-3"
                  style={{ maxHeight: "220px", borderRadius: "12px", objectFit: "cover" }}
                />
                <p className="mb-3" style={{ fontSize: "1.1rem", color: "#555" }}>
                  {modalInfo.product.desc}
                </p>
                <span className="badge rounded-pill px-3 py-2" style={{ background: "#fffbe6", color: "#e67e22", fontSize: "1.2rem", border: "1.5px solid #e67e22" }}>
                  <i className="bi bi-hammer me-1" style={{ color: "#e67e22" }}></i>
                  <span className="fw-bold">{modalInfo.product.price}</span>
                </span>
              </div>
            </div>
          </div>
          <style>
            {`
              @keyframes fadeInBg {
                from { opacity: 0; }
                to { opacity: 1; }
              }
              @keyframes fadeInModal {
                from { transform: translateY(40px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
              }
            `}
          </style>
        </div>
      )}
      <div className="modal-backdrop fade show" style={{ display: modalInfo.show ? "block" : "none" }}></div>

      {showSellerModal && (
      <div
        className="modal fade show"
        tabIndex="-1"
        role="dialog"
        aria-modal="true"
        style={{
          display: "block",
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 3000
        }}
        onClick={() => setShowSellerModal(false)}
      >
        <div
          className="modal-dialog modal-dialog-centered"
          role="document"
          onClick={e => e.stopPropagation()}
        >
          <div className="modal-content" style={{ animation: "fadeInModal 0.3s" }}>
            <div className="modal-header border-0">
              <h5 className="modal-title fw-bold" style={{ color: "#11998e" }}>
                Become a Seller on BidSpirit
              </h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={() => setShowSellerModal(false)}
              ></button>
            </div>
            <div className="modal-body text-center">
              <i className="bi bi-shop-window display-3 text-primary mb-3"></i>
              <p className="mb-3" style={{ fontSize: "1.1rem", color: "#555" }}>
                Ready to reach thousands of bidders? <br />
                Register your shop and start selling today! <br />
                For more information, contact us at <a href="mailto:support@bidspirit.co" className="fw-bold text-success">support@bidspirit.co</a>
              </p>
            </div>
          </div>
        </div>
        <style>
          {`
            @keyframes fadeInModal {
              from { transform: translateY(40px); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
          `}
        </style>
      </div>
    )}
    </>
  );
};

export default Home;