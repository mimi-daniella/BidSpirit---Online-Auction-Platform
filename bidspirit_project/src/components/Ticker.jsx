import React, { useEffect, useState } from "react";

const getTimeString = () => {
  const now = new Date();
  return now.toLocaleString();
};

const getLocationString = (coords) => {
  if (!coords) return "Locating...";
  return `Lat: ${coords.latitude.toFixed(3)}, Lon: ${coords.longitude.toFixed(3)}`;
};

const Ticker = ({ messages }) => {
  const [dateTime, setDateTime] = useState(getTimeString());
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => setDateTime(getTimeString()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setCoords(pos.coords),
        () => setCoords(null)
      );
    }
  }, []);

  const tickerContent = [
    ...messages,
    `Date & Time: ${dateTime}`,
    `Location: ${getLocationString(coords)}`
  ];

  return (
    <div style={{
      width: "100vw",
      position: "fixed",
      left: 0,
      bottom: 0,
      background: "linear-gradient(90deg, #11998e 0%, #38ef7d 100%)",
      color: "#fff",
      fontWeight: 600,
      fontSize: "1rem",
      padding: "7px 0",
      overflow: "hidden",
      zIndex: 2000
    }}>
      <div style={{
        display: "inline-block",
        whiteSpace: "nowrap",
        animation: "ticker-scroll 30s linear infinite"
      }}>
        {tickerContent.map((msg, idx) => (
          <span key={idx} style={{ marginRight: 48 }}>
            <i className="bi bi-megaphone-fill me-2"></i>
            {msg}
          </span>
        ))}
      </div>
      <style>
        {`
          @keyframes ticker-scroll {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </div>
  );
};

export default Ticker;