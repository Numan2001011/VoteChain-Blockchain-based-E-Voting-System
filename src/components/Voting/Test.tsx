import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Candidates, CandidateData } from "./CandidateData";
import "./Test.css";

const CastVote = () => {
  const { candidateId } = useParams<{ candidateId: string }>();
  const [candidate, setCandidate] = useState<CandidateData | undefined>(undefined);
  const [showOverlay, setShowOverlay] = useState<boolean>(false); // State to show/hide overlay

  useEffect(() => {
    const foundCandidate = Candidates.find(
      (c) => c.cid === Number(candidateId)
    );
    setCandidate(foundCandidate);
  }, [candidateId]);

  const handleVote = () => {
    if (candidate) {
      setShowOverlay(true); // Trigger overlay visibility
      setTimeout(() => setShowOverlay(false), 3000); // Hide overlay after 3 seconds
    }
  };

  return (
    <div className="container mt-1">
      <h2 className="text-center mb-4 voting-page-line">CAST VOTING PAGE</h2>
      <div className="d-flex flex-row justify-content-between">
        <button className="back-btn">BACK</button>
        <button className="exit-btn-2">EXIT</button>
      </div>

      {/* Candidate Details */}
      {candidate ? (
        <>
          <div className="candidate-details d-flex">
            <div>
              <img
                src={candidate.cimage}
                alt={candidate.cname}
                className="candidate-image"
              />
              <h4>{candidate.cname}</h4>
              <p>Location: {candidate.location}</p>
              <h5 className="h5">{candidate.party}</h5>
            </div>
            <div className="symbol-container">
              <img
                src={candidate.symbolimg}
                alt={candidate.symbolname}
                className="symbol-image"
              />
              <p>Symbol: {candidate.symbolname}</p>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <button
              onClick={handleVote}
              className="btn btn-success confirm-btn"
            >
              Confirm Vote
            </button>
          </div>
        </>
      ) : (
        <p className="text-center">Candidate not found.</p>
      )}

      {/* Overlay for the congratulations message */}
      {showOverlay && (
  <div className="overlay">
    <div className="congratulations-message">
      <h2>Congratulations!</h2>
      <p>Your vote has been cast successfully.</p>
    </div>
  </div>
)}

    </div>
  );
};

export default CastVote;