import React, { useEffect, useState } from "react";

const Ticker = () => {
  const [location, setLocation] = useState("Detecting location...");
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const res = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const data = await res.json();
            if (data && data.address) {
              const { city, town, village, state, country } = data.address;
              setLocation(
                [city || town || village, state, country]
                  .filter(Boolean)
                  .join(", ")
              );
            } else {
              setLocation("Location unavailable");
            }
          } catch {
            setLocation("Location unavailable");
          }
        },
        () => setLocation("Location permission denied")
      );
    } else {
      setLocation("Geolocation not supported");
    }
  }, []);

  const formattedDate = dateTime.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = dateTime.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div
      className="ticker-bar"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100vw",
        background: "linear-gradient(90deg, #11998e 0%, #38f9d7 100%)",
        color: "#fff",
        zIndex: 9999,
        fontWeight: 500,
        fontSize: "1rem",
        overflow: "hidden",
        height: 48,
        display: "flex",
        alignItems: "center",
        boxShadow: "0 -2px 12px rgba(67,233,123,0.10)",
      }}
    >
      <div
        className="ticker-content"
        style={{
          whiteSpace: "nowrap",
          animation: "ticker-scroll 18s linear infinite",
          display: "inline-block",
          minWidth: "100%",
          fontSize: "1.05rem",
          letterSpacing: ".02em",
        }}
      >
        <span style={{ marginRight: 48 }}>
          <i className="bi bi-calendar-event me-2"></i>
          <span className="fw-semibold">{formattedDate}</span>
        </span>
        <span style={{ marginRight: 48 }}>
          <i className="bi bi-clock me-2"></i>
          <span className="fw-semibold">{formattedTime}</span>
        </span>
        <span>
          <i className="bi bi-geo-alt-fill me-2"></i>
          <span className="fw-semibold">{location}</span>
        </span>
      </div>
      <style>
        {`
          @keyframes ticker-scroll {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          @media (max-width: 600px) {
            .ticker-bar {
              font-size: 0.92rem !important;
              height: 40px !important;
            }
            .ticker-content span {
              margin-right: 24px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Ticker;
