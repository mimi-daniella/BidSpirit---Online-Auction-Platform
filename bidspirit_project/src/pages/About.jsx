import React from "react";
import MissionAndLeaders from "../components/MissionAndLeaders";
import "./About.css";

const About = () => (
  <div className="about-green-bg py-5">
    <div className="container">
      {/* About Intro Section */}
      <section className="mb-5">
        <h1
          className="fw-bold mb-3"
          style={{ color: "#11998e", fontSize: "2.5rem" }}
        >
          About <span style={{ color: "#43e97b" }}>BidSpirit</span>
        </h1>
        <p className="lead mb-4" style={{ maxWidth: 700 }}>
          <b>BidSpirit</b> is Nigeria’s trusted online auction platform for art,
          antiques, collectibles, and more. We connect thousands of bidders and
          sellers nationwide, making auctions accessible, transparent, and
          exciting for everyone.
        </p>
        <p className="text-muted mb-4" style={{ maxWidth: 700 }}>
        <strong>Email:</strong> info@bidspirit.com
          <br />
          <strong>Address:</strong> 123 Auction Lane, Lagos, Nigeria
          <br />
          <strong>Contact:</strong> +234 800 123 4567
        </p>
        <div className="row">
          <div className="col-md-6 mb-4">
            <ul className="list-unstyled fs-5">
              <li className="mb-2">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                <b>Verified Sellers & Secure Payments</b>
              </li>
              <li className="mb-2">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                <b>Live & Upcoming Auctions Weekly</b>
              </li>
              <li className="mb-2">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                <b>Nationwide Delivery & 24/7 Support</b>
              </li>
              <li className="mb-2">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                <b>Bid Insurance for Peace of Mind</b>
              </li>
            </ul>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img
              src="https://media.istockphoto.com/id/1439686281/vector/auction-and-mobile-phone-bidding-concept.jpg?s=612x612&w=0&k=20&c=YfINX2-ALYsSG93X91c3WzwUiE-h9lm3Jx3tOViERxM="
              alt="BidSpirit Auction"
              className="img-fluid rounded shadow"
              style={{ maxHeight: 220, objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* Mission and Leaders Section */}
      <section className="mb-5">
        <MissionAndLeaders />
      </section>

      {/* Contact Section */}
      <div className="container my-5">
        <div className="row justify-content-center align-items-center">
          {/* Contact Info */}
          <div className="col-md-5 mb-4 mb-md-0">
            <div className="bg-white rounded shadow-sm p-4 h-100">
              <h3 className="fw-bold mb-3" style={{ color: "#11998e" }}>
                Contact Us
              </h3>
              <p className="mb-4 text-muted">
                Have questions or need support? Reach out to us anytime!
              </p>
              <ul className="list-unstyled fs-5">
                <li className="mb-3">
                  <i className="bi bi-envelope-fill text-success me-2"></i>
                  <a
                    href="mailto:support@bidspirit.co"
                    className="text-decoration-none text-dark"
                  >
                    support@bidspirit.co
                  </a>
                </li>
                <li className="mb-3">
                  <i className="bi bi-telephone-fill text-success me-2"></i>
                  <a
                    href="tel:+2348000000000"
                    className="text-decoration-none text-dark"
                  >
                    +234 800 000 0000
                  </a>
                  <a href="tel:+2348000000000" className="text-decoration-none text-dark">
                    +234 816 945 3274 | +234 925 118 9230
                  </a>
                </li>
                <li>
                  <i className="bi bi-geo-alt-fill text-success me-2"></i>
                  12 Kunmi Adeyemo Close, Oke-Afa Isolo, Lagos. Nigeria
                </li>
              </ul>
            </div>
          </div>
          {/* Contact Form */}
          <div className="col-12 col-md-7 mb-4 mb-md-0">
            <div className="bg-white rounded shadow-sm p-4 h-100">
              <h3 className="fw-bold mb-3" style={{ color: "#11998e" }}>
                Get in Touch
              </h3>
              <form>
                <h3 className="fw-bold mb-4" style={{ color: "#11998e" }}>Feedback</h3>
                <div className="mb-3">
                  <label className="form-label fw-semibold" htmlFor="contactName">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="contactName"
                    placeholder="Your Name"
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold" htmlFor="contactEmail">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="contactEmail"
                    placeholder="Your Email"
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold" htmlFor="contactMessage">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="contactMessage"
                    rows={4}
                    placeholder="Type your message..."
                    required
                    style={{ resize: "vertical" }}
                  ></textarea>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-success fw-bold py-2" style={{ borderRadius: 20 }}>
                    <i className="bi bi-send me-2"></i>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
      {/* End Contact Section */}
        </div>
      </div>
    </div>
  </div>
);

export default About;