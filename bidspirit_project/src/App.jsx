import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import LogInPopup from "./components/LogInPopup";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
=======
import React, { useState, useEffect } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Auctions from "./pages/Auctions";
import Auth from "./pages/Auth";
import NamePrompt from "./pages/NamePrompt";
import Ticker from "./components/Ticker";

function App() {
  const [firstName, setFirstName] = useState("");
  const [showAuth, setShowAuth] = useState(false);
  const [visitCount, setVisitCount] = useState(1);

  useEffect(() => {
    const storedVisits = localStorage.getItem('visits');
    const count = storedVisits ? parseInt(storedVisits) + 1 : 1;
    localStorage.setItem('visits', count);
    setVisitCount(count);
  }, []);

  useEffect(() => {
    if (firstName) {
      localStorage.setItem("firstName", firstName);
    }
  }, [firstName]);

  const handleNameSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.firstName.value.trim();
    if (value) setFirstName(value);
  };

  const tickerMessages = [
    "Welcome to BidSpirit! Enjoy seamless online auctions.",
    "New: Antique Collection Auction starts July 5th!",
    "Sign up now to participate in live bidding.",
    "Contact support for any assistance."
  ];
>>>>>>> frontend-ui

  return (
<<<<<<< HEAD
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<LogInPopup/>}/>
        </Routes>
      </BrowserRouter>
    </>
=======
    <BrowserRouter>
      {!firstName ? (
        <NamePrompt visitCount={visitCount} handleNameSubmit={handleNameSubmit} />
      ) : (
        <>
          <Navbar onAuthClick={() => setShowAuth(true)} firstName={firstName} visitCount={visitCount} />
            <Ticker messages={tickerMessages} />
          <div style={showAuth ? { filter: "blur(6px)", pointerEvents: "none", userSelect: "none" } : {}}>
            <Routes>
              <Route path="/" element={<Home firstName={firstName} />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/auctions" element={<Auctions />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
          </div>
          {showAuth && (
            <div
              style={{
                position: "fixed",
                top: 0, left: 0, right: 0, zIndex: 1050,
                background: "rgba(0,0,0,0.35)",
                minHeight: "100vh",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                paddingTop: "60px"
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
>>>>>>> frontend-ui
  );
}

export default App;