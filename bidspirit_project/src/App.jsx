import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { NavLink } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Auctions from "./pages/Auctions";
import Feedback from "./pages/Feedback";
import Sitemap from "./pages/Sitemap";
import NamePrompt from "./pages/NamePrompt";
import Ticker from "./components/Ticker";

function App() {
  const [firstName, setFirstName] = useState(null);
  const [showAuth, setShowAuth] = useState(false);
  const [visitCount, setVisitCount] = useState(null);

  //useEffect for visitor count
  useEffect(() => {
    if (!sessionStorage.getItem("visitCounted")) {
      const storedVisits = localStorage.getItem("visits");
      const count = storedVisits ? parseInt(storedVisits, 10) + 1 : 1;
      localStorage.setItem("visits", count);
      setVisitCount(count);
      sessionStorage.setItem("visitCounted", "true");
    } else {  
      const storedVisits = localStorage.getItem("visits");
      setVisitCount(storedVisits ? parseInt(storedVisits, 10) : 1);
    }
  }, []);

  //useEffect for firstName
  useEffect(() => {
    const storedName = localStorage.getItem("firstName");
    if (storedName) {
      setFirstName(storedName);
    }
  }, []);


  const handleNameSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.firstName.value.trim();
    if (value) {
      setFirstName(value);
      localStorage.setItem("firstName", value);
    }
  };

  const tickerMessages = [
    "Welcome to BidSpirit! Enjoy seamless online auctions.",
    "New: Antique Collection Auction starts July 5th!",
    "Sign up now to participate in live bidding.",
    "Contact support for any assistance.",
  ];

  return (
    <BrowserRouter>
      {firstName === null || visitCount === null ? (
        <div>Loading...</div>
      ) : !firstName ? (
        <NamePrompt
          visitCount={visitCount}
          handleNameSubmit={handleNameSubmit}
        />
      ) : (
        <>
          <NavLink to="/home" className="navbar-link">
            Home
          </NavLink>
          <Navbar
            onAuthClick={() => setShowAuth(true)}
            firstName={firstName}
            visitCount={visitCount}
          />
          <Ticker messages={tickerMessages} />
          <div
            style={
              showAuth
                ? {
                    filter: "blur(6px)",
                    pointerEvents: "none",
                    userSelect: "none",
                  }
                : {}
            }
          >
            <Navbar firstName={firstName} visitCount={visitCount} onAuthClick={() => {}} />
              <br />
            <Ticker messages={tickerMessages} />
            <div style={showAuth ? { filter: "blur(6px)", pointerEvents: "none", userSelect: "none", paddingTop: "80px" } : {}} >
              <Routes>
                <Route path="/" element={<Home firstName={firstName} />} />
                <Route path="/about" element={<About />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/auctions" element={<Auctions />} />
                <Route path="/sitemap" element={<Sitemap />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route
                  path="/contact"
                  element={
                    <h1 style={{ textAlign: "center", marginTop: "20px" }}>
                      Contact Us page is under construction.
                    </h1>
                  }
                />
                <Route path="*" element={<h1>404 Not Found</h1>} />
              </Routes>
            </div>
          </div>
          {showAuth && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1050,
                background: "rgba(0,0,0,0.35)",
                minHeight: "100vh",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                paddingTop: "60px",
              }}
            >
              <div style={{ minWidth: 350, maxWidth: 420, width: "100%" }}>
                <Auth onClose={() => setShowAuth(false)} />
              </div>
            </div>
          )}
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
