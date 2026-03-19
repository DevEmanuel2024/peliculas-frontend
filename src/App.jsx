import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Generos from "./pages/Generos";
import Directores from "./pages/Directores";
import Productoras from "./pages/Productoras";
import Tipos from "./pages/Tipos";
import Medias from "./pages/Medias";
import Inicio from "./pages/Inicio";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/generos" element={<Generos />} />
          <Route path="/directores" element={<Directores />} />
          <Route path="/productoras" element={<Productoras />} />
          <Route path="/tipos" element={<Tipos />} />
          <Route path="/medias" element={<Medias />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;