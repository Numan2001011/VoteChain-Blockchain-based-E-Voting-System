import React from "react";
import { Candidates, CandidateData } from "./CandidateData";
import { Voters, VoterData } from "../VoterInfo";
import CandidateCard from "./CandidateCard";
import "./Votingpage.css";

const VotingPage = () => {
  const [voterdata, setVoterData] = React.useState<VoterData | null>(Voters[0]);

  // Filter candidates based on user's location
  const filteredCandidates = Candidates.filter(
    (candidate) => candidate.location === voterdata?.userlocation
  );

  const handleVote = (candidate: CandidateData) => {
    alert(`You voted for ${candidate.cname} in ${candidate.location}!`);
  };

  return (
    <div className="container mt-1">
      <h2 className="text-center mb-4 voting-page-line">VOTING PAGE</h2>
      <div className="d-flex flex-row justify-content-between">
        <button className="back-btn">BACK</button>
        <button className="exit-btn-2">EXIT</button>
      </div>

      {/* Candidate List */}
      <div className="row">
        {filteredCandidates.length > 0 ? (
          filteredCandidates.map((candidate) => (
            <div className="col-md-12 mb-4" key={candidate.cname}>
              <CandidateCard
                candidate={candidate}
                onSelect={handleVote} // Pass the voting handler
              />
            </div>
          ))
        ) : (
          <p className="text-center">No candidates available for selection.</p>
        )}
      </div>
    </div>
  );
};

export default VotingPage;
