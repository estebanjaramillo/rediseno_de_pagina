import React from "react";
import "./styles.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";

export default function Admin() {
  return (
    <div>
      <br />
      <h1 className="titulo">Administrador Del Sistema</h1>
      <nav className="navegacion">
        <ul className="menu">
          <li>
            <a className="a" href="/catalogo">
              Actualizar Catalogo
            </a>
          </li>
          <li>
            <a className="a" href="/barberos">
              Barberos
            </a>
          </li>

          <li>
            <a className="a" href="/">
              Registrar
            </a>
          </li>
        </ul>
      </nav>
      <br></br>
    </div>
  );
}
