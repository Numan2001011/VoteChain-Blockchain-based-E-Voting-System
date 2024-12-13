import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./components/Landing";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import Votingpage from "./components/Voting/VotingList";
import CastVote from "./components/Voting/CastVote";
import Test from "./components/Voting/Test";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/voting" element={<Votingpage />} />
          <Route path="votecandidate/:candidateId" element={<CastVote />} />
          {/* <Route path="/test/:candidateId" element={<Test/>} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
