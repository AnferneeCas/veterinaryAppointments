import React, { Component } from "react";
import uuid from "uuid";

const stateInicial = {
  cita: {
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  },
  error: false,
};

class NuevaCita extends Component {
  state = { ...stateInicial };

  handleChange = (e) => {
    this.setState({
      cita: {
        ...this.state.cita,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { mascota, propietario, fecha, hora, sintomas } = this.state.cita;
    if (
      mascota == "" ||
      propietario == "" ||
      fecha == "" ||
      hora == "" ||
      sintomas == ""
    ) {
      this.setState({
        error: true,
      });
      return;
    }
    const NuevaCita = { ...this.state.cita };
    NuevaCita.id = uuid();
    this.props.crearNuevaCita(NuevaCita);
    this.setState({
      ...stateInicial,
    });
  };

  render() {
    const error = this.state.error;
    console.log("RENDERDERRR");
    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">
            Please fill the form to create a new Appointment
          </h2>
          {error ? (
            <div className="alert alert-danger mt-2 mb-5 text-center">
              All fields are required
            </div>
          ) : null}
          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Pet Name
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Pet Name"
                  name="mascota"
                  onChange={this.handleChange}
                  value={this.state.cita.mascota}
                />
              </div>
            </div>{" "}
            {/* form-group */}
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Owner Name
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Owner Name"
                  name="propietario"
                  onChange={this.handleChange}
                  value={this.state.cita.propietario}
                />
              </div>
            </div>{" "}
            {/* form-group */}
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Date</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="date"
                  className="form-control"
                  name="fecha"
                  onChange={this.handleChange}
                  value={this.state.cita.fecha}
                />
              </div>

              <label className="col-sm-4 col-lg-2 col-form-label">Hour</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="time"
                  className="form-control"
                  name="hora"
                  onChange={this.handleChange}
                  value={this.state.cita.hora}
                />
              </div>
            </div>
            {/* form-group */}
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Symptoms
              </label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  className="form-control"
                  name="sintomas"
                  placeholder="Describe the symptoms"
                  onChange={this.handleChange}
                  value={this.state.cita.sintomas}
                ></textarea>
              </div>
            </div>
            {/* form-group */}
            <input
              type="submit"
              className="py-3 mt-2 btn btn-success btn-block"
              value="Add a new appointment"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default NuevaCita;
