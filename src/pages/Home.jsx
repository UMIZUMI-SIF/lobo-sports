import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/mujer">Mujer</Link>
        </li>
        <li>
          <Link to="/hombre">Hombre</Link>
        </li>
        <li>
          <Link to="/infantil">Infantil</Link>
        </li>
        <li>
          <Link to="/ropa">Ropa</Link>
        </li>
        <li>
          <Link to="/calzado">Calzado</Link>
        </li>
        <li>
          <Link to="/equipo">Equipo</Link>
        </li>
        <li>
          <Link to="/carrito">Carrito</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
