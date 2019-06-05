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
        <h3>
          Registrar Presupuesto
          <ul id="nav-mobile" className="right  hide-on-med-and-down">
            <li>
              <a className="seleccionar">
                Regresar<i className="material-icons right">reply</i>
              </a>
            </li>
          </ul>
        </h3>
        <div className="container">
          <div className="card-reg">
            <button
              type="submit"
              onClick={this.onSubmit}
              className="btn-reg btn-primary"
            >
              REGISTRAR EGRESOS{" "}
            </button>

            <button
              type="submit"
              onClick={this.onSubmit}
              className="btn-reg btn-primary"
            >
              REGISTRAR INGRESOS{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoForm;
