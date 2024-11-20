import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Landing.css"; // Custom CSS
import evoting from "../../public/images/evoting.png";

const Landing = () => {
  return (
    <>
      {/* Main Container */}
      <div className="container-fluid text-center py-4 bg-dark text-white mt-0">
        <div className="row">
          <div className="col-12">
            <h2 className="display-4">
              VoteChain: Blockchain-based E-Voting System
            </h2>
          </div>
          <div className="col-12 mt-3 subheading">
            {/* Apply the subheading class here */}
            <div className="d-flex justify-content-center gap-3 fs-5">
              <span className="badge bg-primary">Security</span>
              <span className="badge bg-secondary">Transparency</span>
              <span className="badge bg-success">Decentralized Vote</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section with Text and Image */}
      <section className="container my-5">
        <div className="row align-items-center">
          {/* Text item to the left */}
          <div className="col-md-6">
            <h1 className="display-5">
              Welcome to <span className="text-primary">VoteChain</span>
              <br />
              <span className="text-success">A comprehensive E-Voting System</span>
            </h1>
            <p className="lead">
              A beautiful, user-friendly website that makes usage of IoT Lab
              more automated and flexible.
            </p>
          </div>

          {/* Image to the right */}
          <div className="col-md-6 text-center">
            <img src={evoting} alt="e-voting" className="img-fluid rounded" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
