import React from "react";
import Countdown from "react-countdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import jewel1 from "../assets/jewel1.jpg";
import furniture1 from "../assets/furniture1.jpg";
import jewel2 from "../assets/jewel2.jpg";
import sponsored1 from "../assets/sponsored1.jpg";
import sponsored2 from "../assets/sponsored2.jpg";
import sponsored3 from "../assets/sponsored3.jpg";

const popularItems = [
  { name: "WristWatch", price: "₦BP 85.00", image: jewel1 },
  { name: "Arm Chair", price: "₦BP 210.00", image: furniture1 },
  { name: "Brochelt", price: "₦BP 75.00", image: jewel2 },
];

const upcomingAuctions = [
  {
    name: "Vinyl Furnitures",
    image: sponsored1,
    time: new Date(Date.now() + 24 * 60 * 60 * 1000),
  },
  {
    name: "Sarah’s Gift Shop",
    image: sponsored2,
    time: new Date(Date.now() + 2.5 * 60 * 60 * 1000),
  },
  {
    name: "Vis a vis",
    image: sponsored3,
    time: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
  },
];

const completedAuctions = [
  { name: "Joseph House", image: jewel1 },
  { name: "Almaira", image: furniture1 },
  { name: "Unknown", image: jewel2 },
];

const CountdownRenderer = ({ hours, minutes, days, completed }) => {
  if (completed) return <span className="text-danger">Now 🔥</span>;
  if (days > 1) return <span>📅 {new Date().toLocaleDateString("en-US", { weekday: "long" })}</span>;
  if (days === 1) return <span>📅 Tomorrow</span>;
  return (
    <span>
      ⏰ {hours > 0 ? `${hours}h ` : ""}
      {minutes}m
    </span>
  );
};

const AuctionSection = () => {
  const now = new Date();
  const localTime = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const localDate = now.toLocaleDateString("en-GB");

  return (
    <div className="my-5 p-4 bg-white rounded shadow-sm">
      {/* Section Header */}
      <div className="mb-4">
        <div className="d-flex justify-content-center align-items-center gap-2">
          <i className="bi bi-collection" style={{ fontSize: "2.2rem", color: "#43e97b", verticalAlign: "middle" }}></i>
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
            Auction Highlights
          </h2>
        </div>
        <div className="d-flex justify-content-center">
        </div>
      </div>

      <div className="row text-center text-md-start">
        {/* Popular Items */}
        <div className="col-md-4 mb-4">
          <h5 className="fw-bold mb-3" style={{ color: "#11998e" }}>
            <i className="bi bi-star-fill me-2" style={{ color: "#f1c40f" }}></i>
            Popular Items
          </h5>
          {popularItems.map((item, idx) => (
            <div key={idx} className="card mb-3 border-0 shadow-sm">
              <div className="d-flex align-items-center p-2">
                <img src={item.image} alt={item.name} className="me-3 rounded" width={60} height={60} style={{ objectFit: "cover" }} />
                <div>
                  <p className="mb-1 fw-semibold">{item.name}</p>
                  <span className="badge rounded-pill px-3 py-2" style={{ background: "#fffbe6", color: "#e67e22", border: "1.5px solid #e67e22" }}>
                    <i className="bi bi-hammer me-1" style={{ color: "#e67e22" }}></i>
                    {item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Auctions */}
        <div className="col-md-4 mb-4">
          <h5 className="fw-bold mb-3" style={{ color: "#11998e" }}>
            <i className="bi bi-clock-history me-2" style={{ color: "#2980b9" }}></i>
            Upcoming Auctions
          </h5>
          {upcomingAuctions.map((auction, idx) => (
            <div key={idx} className="card mb-3 border-0 shadow-sm">
              <div className="d-flex align-items-center p-2">
                <img src={auction.image} alt={auction.name} className="me-3 rounded" width={60} height={60} style={{ objectFit: "cover" }} />
                <div>
                  <p className="mb-1 fw-semibold">{auction.name}</p>
                  <span className="badge rounded-pill px-3 py-2" style={{ background: "#eaf6ff", color: "#2980b9", border: "1.5px solid #2980b9" }}>
                    <Countdown date={auction.time} renderer={CountdownRenderer} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Completed Auctions */}
        <div className="col-md-4 mb-4">
          <h5 className="fw-bold mb-3" style={{ color: "#11998e" }}>
            <i className="bi bi-check2-circle me-2" style={{ color: "#43e97b" }}></i>
            Completed Auctions
          </h5>
          {completedAuctions.map((auction, idx) => (
            <div key={idx} className="card mb-3 border-0 shadow-sm">
              <div className="d-flex align-items-center p-2">
                <img src={auction.image} alt={auction.name} className="me-3 rounded" width={60} height={60} style={{ objectFit: "cover" }} />
                <div>
                  <p className="mb-1 fw-semibold">{auction.name}</p>
                  <span className="badge rounded-pill px-3 py-2" style={{ background: "#eaffea", color: "#43e97b", border: "1.5px solid #43e97b" }}>
                    Completed
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuctionSection;