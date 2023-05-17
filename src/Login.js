import React from "react";
import "./styles.css";

export default function Login() {
  state = {
    from: {
      username: "",
      password: ""
    }
  };

  return (
    <div>
      <br></br>
      <div className="form-register">
        <h4> Login</h4>
        <input
          className="controls"
          type="text"
          name="username"
          id="username"
          placeholder="Ingrese su Correo"
        />
        <input
          className="controls"
          type="password"
          name="password"
          id="password"
          placeholder="Ingrese su Contraseña"
        />
        <input className="botons" type="submit" value="enviar" />
        <p>
          <a href="/Registro">¿No tengo Cuenta?</a>
        </p>
      </div>
    </div>
  );
}
