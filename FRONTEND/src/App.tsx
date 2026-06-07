import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Registro from "./pages/registro";
import ListaMedicos from "./pages/ListaMedicos";
import Citas from "./pages/Citas";
import Agenda from "./pages/Agenda";
import Perfil from "./pages/Perfil";
import Recuperar from "./pages/Recuperar";
import Menu from "./pages/Menu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/medicos" element={<ListaMedicos />} />
        <Route path="/citas" element={<Citas />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/recuperar" element={<Recuperar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;