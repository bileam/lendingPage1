import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home1 from "./Components/Home1";

function App() {
  return (
    <Router>
      <div className="text-[#ffff] font-serif">
        <Routes>
          <Route path="/" element={<Home1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
