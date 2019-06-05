import React, { Component } from "react";
import "./App.css";

// data
import { todos } from "./todos.json";

// subcomponents
import TodoForm from "./components/RegistrarPresupuesto";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  removeTodo(index) {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index;
      })
    });
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return <div className="pantalla" key={i} />;
    });

    // RETURN THE COMPONENT
    return (
      <div className="App">
        <div className="text-center">
          <TodoForm onAddTodo={this.handleAddTodo} />
        </div>

        <div className="pantalla">
          <div className="row">{todos}</div>
        </div>
      </div>
    );
  }
}

export default App;
