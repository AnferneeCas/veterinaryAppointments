import React from "react";

const Citas = ({ cita, eliminarCita }) => (
  <div>
    <div className="card text-white bg-primary mb-3 w-100">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <b>Pet Name: </b> {cita.mascota}
          </div>

          <div className="col-6">
            <div className=" float-right">
              <span>
                <b>Date:</b>
              </span>
              {cita.fecha}
              <span className="ml-2">
                <b>Hour:</b>
              </span>
              {cita.hora}
            </div>
          </div>
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">
          <b>Owner:</b> {cita.propietario}
        </h5>
        <p className="card-text">
          <b>Symptoms:</b> <div> {cita.sintomas}</div>
        </p>
      </div>

      <div className="card-footer">
        <button
          className="btn btn-danger w-100"
          onClick={() => eliminarCita(cita.id)}
        >
          Delete
        </button>
      </div>
    </div>
  </div>
  // <div className="media mt-3">
  //   <div className="media-body">
  //     <h3 className="mt-0">{cita.mascota}</h3>
  //     <p className="card-text">
  //       <span>Owner: </span> {cita.propietario}
  //     </p>
  //     <p className="card-text">
  //       <span>Date: </span> {cita.fecha}
  //     </p>
  //     <p className="card-text">
  //       <span>Hour: </span> {cita.hora}
  //     </p>
  //     <p className="card-text">
  //       <span>symptoms: </span>
  //     </p>
  //     <p className="card-text">{cita.sintomas}</p>
  //     <button className="btn btn-danger" onClick={() => eliminarCita(cita.id)}>
  //       Borrar &times;
  //     </button>
  //   </div>
  // </div>
);

export default Citas;
