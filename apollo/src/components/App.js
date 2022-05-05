import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "../routes/detail";
import Home from "../routes/home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
};

export default App;
