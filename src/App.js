import Home from "./page/Home";
import ProjectPage from "./page/ProjectPage";
import Certificatepage from "./page/CertificatePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/project" element={<ProjectPage />} />
      </Routes>
      <Routes>
        <Route path="/certificate" element={<Certificatepage />} />
      </Routes>
    </Router>
  );
}

export default App;
