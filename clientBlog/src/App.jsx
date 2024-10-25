import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import AddBlog from "./components/AddBlog";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components/AddBlog" element={<AddBlog />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
