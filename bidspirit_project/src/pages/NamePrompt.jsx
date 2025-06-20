import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const SLIDES = [
  "https://static.vecteezy.com/system/resources/thumbnails/005/179/608/small/green-wave-abstract-background-wave-background-illustration-free-vector.jpg",
  "https://psdgraphics.com/wp-content/uploads/2013/05/green-design.jpg",
  "https://media.istockphoto.com/id/991117712/vector/abstract-wavy-horizontal-lines-background.jpg?s=612x612&w=0&k=20&c=WTA2TXoEpHAFgUANQQQ_jnsH1advRBLbX5PE_Zy2vLo="
];

const NamePrompt = ({ visitCount, handleNameSubmit }) => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % SLIDES.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar firstName="" visitCount={visitCount} onAuthClick={() => {}} />
      <div
        style={{
          minHeight: "100vh",
          width: "100vw",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden"
        }}
      >
        {/* Slideshow background */}
        <div style={{
          position: "absolute",
          top: 0, left: 0, width: "100vw", height: "100vh",
          zIndex: 0,
          pointerEvents: "none"
        }}>
          {SLIDES.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt=""
              style={{
                position: "absolute",
                width: "100vw",
                height: "100vh",
                objectFit: "cover",
                left: 0,
                top: 0,
                opacity: slide === idx ? 1 : 0,
                transition: "opacity 1.2s"
              }}
            />
          ))}
        {/* Gradient overlay */}
          <div style={{
            position: "absolute",
            top: 0, left: 0, width: "100vw", height: "100vh",
            background: "linear-gradient(135deg, #e0ffe7cc 0%, #b2f7cc99 40%, #43e97bcc 100%)",
            zIndex: 1
          }} />
        </div>
        {/* Form card */}
        <form
          onSubmit={handleNameSubmit}
          className="bg-white p-4 rounded shadow"
          style={{
            minWidth: 320,
            maxWidth: 380,
            border: "2px solid #43e97b",
            boxShadow: "0 8px 32px rgba(67,233,123,0.13)",
            zIndex: 2,
            position: "relative"
          }}
        >
          <h5 className="mb-3 fw-bold" style={{ color: "#11998e" }}>Welcome to BidSpirit!</h5>
          <div className="mb-3">
            <label className="form-label fw-semibold">Enter your first name:</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              autoFocus
              required
              maxLength={30}
              style={{ borderColor: "#43e97b" }}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 fw-bold">Enter Portal</button>
        </form>
      </div>
    </>
  );
};

export default NamePrompt;