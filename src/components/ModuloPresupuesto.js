import React, { Component } from "react";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      anio: "",
      nconsejo: "",
      fechacon: "",
      resdecanal: "",
      fechard: "",
      resrectoral: "",
      fecharr: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      anio: "",
      nconsejo: "",
      fechacon: "",
      resdecanal: "",
      fechard: "",
      resrectoral: "",
      fecharr: ""
    });
  }

  handleInputChange(e) {
    const { value, name } = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="">
        <h3>Módulo de Presupuesto</h3>
        <div className="container ">
          <div className="card">
            <form onSubmit={this.handleSubmit} className="card-body">
              <div className="seccion-aper">
                <div className="form-group">
                  <input
                    type="text"
                    name="anio"
                    className="form-control"
                    value={this.state.anio}
                    onChange={this.handleInputChange}
                    placeholder="Año"
                  />
                </div>
              </div>

              <div className="seccion-aper">
                <strong>
                  <label className="aper-label">Consejo de Facultad: </label>
                </strong>
                <div className="form-group">
                  <input
                    type="text"
                    name="nconsejo"
                    className="form-control"
                    value={this.state.nconsejo}
                    onChange={this.handleInputChange}
                    placeholder="N° Consejo"
                  />
                </div>

                <div className="apertura-label">
                  <div>
                    <input
                      type="date"
                      name="fechacon"
                      className="form-control"
                      value={this.state.fechacon}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
              </div>

              <div className="seccion-aper">
                <strong>
                  <label className="aper-label"> Resolución Decanal: </label>
                </strong>
                <div className="form-group">
                  <input
                    type="text"
                    name="resdecanal"
                    className="form-control"
                    value={this.state.resdecanal}
                    onChange={this.handleInputChange}
                    placeholder="N° R.D."
                  />
                </div>

                <div className="form-group">
                  <div>
                    <input
                      type="date"
                      name="fechard"
                      className="form-control"
                      value={this.state.fechard}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
              </div>

              <div className="seccion-aper">
                <strong>
                  <label className="aper-label"> Resolución Rectoral: </label>
                </strong>
                <div className="form-group">
                  <input
                    type="text"
                    name="resrectoral"
                    className="form-control"
                    value={this.state.resrectoral}
                    onChange={this.handleInputChange}
                    placeholder="N° R.R."
                  />
                </div>

                <div>
                  <input
                    type="date"
                    name="fecharr"
                    className="form-control"
                    value={this.state.fecharr}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>

              <button
                type="submit"
                onClick={this.onSubmit}
                className="btn btn-primary"
              >
                APERTURAR PRESUPUESTO
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoForm;
