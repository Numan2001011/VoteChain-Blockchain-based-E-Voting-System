import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Landing.css"; // Custom CSS
import evoting from "../../public/images/evoting.png";
import fingerprint from "../../public/images/fingerprint.jpg";
const Landing = () => {
  return (
    <>
      {/* Main Container */}
      <div className="container-fluid text-center py-4 bg-dark text-white mt-0">
        <div className="row">
          <div className="col-12">
            <h2 className="display-4">VoteChain : One Person One Vote</h2>
          </div>
          <div className="col-12 mt-3 subheading">
            <div className="d-flex subheading justify-content-center gap-3 fs-5">
              <span
                className="badge bg-primary"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Security ensures the integrity of votes through cryptographic methods."
              >
                Security
              </span>
              <span
                className="badge bg-secondary"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Transparency ensures that the voting process and results are visible and verifiable."
              >
                Transparency
              </span>
              <span
                className="badge bg-success"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Decentralized Vote allows voting without a central authority, ensuring no manipulation."
              >
                Decentralized Vote
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Section with Text and Image */}
      <section className="container my-3">
        <div className="row align-items-center">
          {/* Text item to the left */}
          <div className="col-md-6 text-center">
            <h1 className="display-5">
              Welcome to{" "}
              <span className="text-primary fst-normal">VoteChain</span>
              <br />
              <span className="text-success">
                A comprehensive E-Voting System
              </span>
            </h1>
            <p className="lead">
              A beautiful, user-friendly, comprehensive web platform for casting
              votes securely and transparently using blockchain technology.
            </p>
          </div>

          {/* Image to the right */}
          <div className="col-md-6 text-center">
            <img src={evoting} alt="e-voting" className="img-fluid rounded" />
          </div>
        </div>
      </section>

      <section>
        <div className="container my-3">
          <div className="row align-items-center">
            <div className="col-12 gap-4 d-flex justify-content-center align-items-center">
              <div className="fs-1 fingerprint-line px-5 py-3">
                Click here to verify Fingerprint
              </div>
              <div>
                <img
                  src={fingerprint}
                  alt="Fingerprint Icon"
                  className="img-fluid rounded fingerprint-img"
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
