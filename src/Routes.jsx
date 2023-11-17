import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Carrito = React.lazy(() => import("pages/Carrito"));
const Equipo = React.lazy(() => import("pages/Equipo"));
const Calzado = React.lazy(() => import("pages/Calzado"));
const Ropa = React.lazy(() => import("pages/Ropa"));
const Infantil = React.lazy(() => import("pages/Infantil"));
const Hombre = React.lazy(() => import("pages/Hombre"));
const Mujer = React.lazy(() => import("pages/Mujer"));
const Inicio = React.lazy(() => import("pages/Inicio"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/mujer" element={<Mujer />} />
          <Route path="/hombre" element={<Hombre />} />
          <Route path="/infantil" element={<Infantil />} />
          <Route path="/ropa" element={<Ropa />} />
          <Route path="/calzado" element={<Calzado />} />
          <Route path="/equipo" element={<Equipo />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
