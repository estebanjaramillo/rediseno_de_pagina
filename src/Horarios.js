import { Button } from "bootstrap";
import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import SeleccionarFechaHora from "./SeleccionarFechaHora";

export default function Horarios() {
  return (
    <div className="fondo">
      <h1 className="titulo">Horarios</h1>
      <br />

      <table className="table">
        <td>
          DIAS
          <tr>Lunes</tr>
          <tr>Martes</tr>
          <tr>Miercoles</tr>
          <tr>Jueves</tr>
          <tr>Viernes</tr>
          <tr>Sabado</tr>
        </td>

        <td>
          HORAS
          <tr onclick> 10 AM - 3PM</tr>
          <tr>10 AM - 3PM</tr>
          <tr>10 AM - 3PM</tr>
          <tr>10 AM - 3PM</tr>
          <tr>10 AM - 5PM</tr>
          <tr>11 AM - 8PM</tr>
        </td>
      </table>
      <br />
      <br />
      <p>
        <SeleccionarFechaHora />
        <br />

        <Link to="/">
          <button>Reservar</button>
        </Link>
      </p>
    </div>
  );
}
