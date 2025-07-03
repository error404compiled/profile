import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home/Home";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<LandingPage />} /> */}
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;
