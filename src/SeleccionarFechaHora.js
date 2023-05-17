import React, { useState } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";

const SeleccionarFechaHora = () => {
  const [fecha, setFecha] = useState(null);
  const [hora, setHora] = useState(null);

  const handleFechaChange = (date) => {
    setFecha(date);
  };

  const handleHoraChange = (time) => {
    setHora(time);
  };

  return (
    <div>
      <h1>Seleccionar Fecha y Hora</h1>
      <DatePicker
        selected={fecha}
        onChange={handleFechaChange}
        dateFormat="dd/MM/yyyy"
      />
      <TimePicker value={hora} onChange={handleHoraChange} />
      <button
        onClick={() =>
          console.log("Fecha seleccionada:", fecha, "Hora seleccionada:", hora)
        }
      >
        Guardar
      </button>
    </div>
  );
};

export default SeleccionarFechaHora;
