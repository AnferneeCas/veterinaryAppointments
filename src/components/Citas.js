import React from "react";

const Citas = ({ cita, eliminarCita }) => (
  <div className="media mt-3">
    <div className="media-body">
      <h3 className="mt-0">{cita.mascota}</h3>
      <p className="card-text">
        <span>Owner: </span> {cita.propietario}
      </p>
      <p className="card-text">
        <span>Date: </span> {cita.fecha}
      </p>
      <p className="card-text">
        <span>Hour: </span> {cita.hora}
      </p>
      <p className="card-text">
        <span>symptoms: </span>
      </p>
      <p className="card-text">{cita.sintomas}</p>
      <button className="btn btn-danger" onClick={() => eliminarCita(cita.id)}>
        Borrar &times;
      </button>
    </div>
  </div>
);

export default Citas;
