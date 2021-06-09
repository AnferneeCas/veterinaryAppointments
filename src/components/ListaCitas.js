import React from "react";
import Citas from "./Citas";
const ListaCitas = (props) => {
  const mensaje =
    props.citas.length === 0
      ? "No appointments"
      : "Manage your appointments here";
  return (
    <div className="card mt-2 py-5">
      <div className="card-body">
        <h2 className="card-title text-center">{mensaje}</h2>
        <div className="lista-citas">
          {props.citas.map((cita) => (
            <Citas
              key={cita.id}
              cita={cita}
              eliminarCita={props.eliminarCita}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListaCitas;
