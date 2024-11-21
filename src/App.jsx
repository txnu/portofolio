import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Section from "./view/section/section";

function App() {
  return (
    <div className="bg-gray-800">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Section />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
