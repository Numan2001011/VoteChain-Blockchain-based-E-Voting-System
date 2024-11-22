import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./components/Landing";
import Landing2 from "./components/Landing2";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import Votingpage from "./components/Voting/Votingpage";
import Newvoting from "./components/Voting/Newvoting";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/voting" element={<Votingpage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
