import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Sitemap = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4" style={{ color: "#C85B20" }}>
        Find your way...
      </h2>

      <div className="row">
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card border-light shadow-sm">
            <div className="card-body">
              <h5 className="card-title" style={{ color: "#C85B20" }}>
                Home Page
              </h5>
              <ul className="list-unstyled">
                <li>
                  <Link
                    to="/"
                    className="text-decoration-none"
                    style={{ color: "black" }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-decoration-none"
                    style={{ color: "black" }}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    className="text-decoration-none"
                    style={{ color: "black" }}
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="text-decoration-none"
                    style={{ color: "black" }}
                  >
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card border-light shadow-sm">
            <div className="card-body">
              <h5 className="card-title" style={{ color: "#C85B20" }}>
                Products
              </h5>
              <ul className="list-unstyled">
                <li>
                  <Link
                    to="/gallery"
                    className="text-decoration-none"
                    style={{ color: "black" }}
                  >
                    All Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/auctions"
                    className="text-decoration-none"
                    style={{ color: "black" }}
                  >
                    Auctions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card border-light shadow-sm">
            <div className="card-body">
              <h5 className="card-title" style={{ color: "#C85B20" }}>
                Support
              </h5>
              <ul className="list-unstyled">
                <li>
                  <Link
                    to="/feedback"
                    className="text-decoration-none"
                    style={{ color: "black" }}
                  >
                    Feedback
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card border-light shadow-sm">
            <div className="card-body">
              <h5 className="card-title" style={{ color: "#C85B20" }}>
                Account
              </h5>
              <ul className="list-unstyled">
                <li>
                  <Link
                    to="/register"
                    className="text-decoration-none"
                    style={{ color: "black" }}
                  >
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
