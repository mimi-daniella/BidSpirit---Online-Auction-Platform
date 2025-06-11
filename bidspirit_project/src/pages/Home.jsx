import React from "react";
import SearchBar from "../components/Searchbar";

const Home = () => {
  return (
    <>
      <header className="bg-light border-bottom py-4 mb-4">
        <div className="container">
          <div className="row justify-content-center mb-3">
            <div className="col-md-8 d-flex justify-content-center">
              <SearchBar />
            </div>
          </div>
          <h1 className="text-center fw-bold mb-2" style={{ fontSize: "2.5rem", letterSpacing: "1px" }}>
            Welcome to BidSpirit Online Auction Platform
          </h1>
        </div>
      </header>
      <main className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <p className="lead">Your one-stop platform for auctions and collectibles.</p>
            <p>Explore our latest auctions and find unique items!</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;