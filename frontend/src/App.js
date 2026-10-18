import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Catalogue from "./pages/catalogue";
import CatalogueDetails from "./pages/catalogueDetails";
import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar" aria-label="Điều hướng chính">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/catalogue">Catalogue</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/catalogue/:id" element={<CatalogueDetails />} />
      </Routes>
    </>
  );
}

export default App;
