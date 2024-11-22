import React, { useState } from "react";
import { Candidates, CandidateData } from "./CandidateData";
import CandidateCard from "./CandidateCard";
import "./Votingpage.css";

const Newvoting: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>(""); // State for selected location
  const [selectedSubLocation, setSelectedSubLocation] = useState<string>(""); // State for selected sublocation

  // Extract unique locations from Candidates data
  const uniqueLocations = Array.from(
    new Set(Candidates.map((candidate) => candidate.location))
  );

  // Extract unique sublocations based on selected location
  const uniqueSubLocations =
    selectedLocation &&
    Array.from(
      new Set(
        Candidates.filter(
          (candidate) => candidate.location === selectedLocation
        ).map((candidate) => candidate.sublocation)
      )
    );

  // Filter candidates based on selected location and sublocation
  const filteredCandidates = Candidates.filter((candidate) => {
    if (selectedSubLocation) {
      return candidate.sublocation === selectedSubLocation;
    } else if (selectedLocation) {
      return candidate.location === selectedLocation;
    }
    return true;
  });

  // Handle location selection
  const handleLocationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const location = event.target.value;
    setSelectedLocation(location);
    setSelectedSubLocation(""); // Reset sublocation when a new location is selected
  };

  // Handle sublocation selection
  const handleSubLocationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedSubLocation(event.target.value);
  };

  const handleVote = (candidate: CandidateData) => {
    alert(`You voted for ${candidate.cname} in ${candidate.sublocation}!`);
  };

  return (
    <div className="container mt-1">
      <h2 className="text-center mb-4 voting-page-line">VOTING PAGE</h2>
      <div className="d-flex flex-row justify-content-between">
        <button className="back-btn">BACK</button>
        <button className="exit-btn-2">EXIT</button>
      </div>

      {/* Location Selection Dropdown */}
      <div className="row mb-4">
        <div className="col-md-6 offset-md-3">
          <select
            className="form-select mb-3"
            value={selectedLocation}
            onChange={handleLocationChange}
          >
            <option value="">Select Location</option>
            {uniqueLocations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>

          {/* Sublocation Selection Dropdown */}
          {selectedLocation && uniqueSubLocations && (
            <select
              className="form-select"
              value={selectedSubLocation}
              onChange={handleSubLocationChange}
            >
              <option value="">Show All in {selectedLocation}</option>
              {uniqueSubLocations.map((sublocation) => (
                <option key={sublocation} value={sublocation}>
                  {sublocation}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>

      {/* Candidate List */}
      <div className="row">
        {filteredCandidates.length > 0 ? (
          filteredCandidates.map((candidate) => (
            <div className="col-md-12 mb-4" key={candidate.sublocation}>
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

export default Newvoting;
