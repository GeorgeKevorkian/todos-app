import React from 'react';

// const App = props => {
//   return <div>
//   {props.name}
//   </div>;
// };

class App extends React.Component {
  state = {
    newTodo: '',
    editing: false,
    editingIndex: null,
    todos: [
      { id: 1, name: 'Start coding' },
      { id: 2, name: 'Play football' },
      { id: 3, name: 'Go to work' },
      { id: 4, name: 'Ride a bicycle' },
    ],
  };

  newTodos = e => {
    this.setState({
      newTodo: e.target.value,
    });
  };

  generate = () => {
    const lastTodo = this.state.todos[this.state.todos.length - 1];

    if (lastTodo) {
      return lastTodo.id + 1;
    }
    return 1;
  };

  addTodo = () => {
    const newTodo = {
      id: this.generate(),
      name: this.state.newTodo,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
      newTodo: '',
    });
  };

  removeTodo = index => {
    delete this.state.todos[index];
    this.setState({
      todos: this.state.todos,
    });
  };

  editTodo = index => {
    this.setState({
      editing: true,
      newTodo: this.state.todos[index].name,
      editingIndex: index,
    });
  };

  updateTodo = () => {
    const todo = this.state.todos[this.state.editingIndex];
    todo.name = this.state.newTodo;
    const todos = this.state.todos;
    todos[this.state.editingIndex] = todo;

    this.setState({
      todos: todos,
      editing: false,
      editingIndex: null,
      newTodo: '',
    });
  };

  render() {
    return (
      <div>
        <input
          className="my-4 form-control"
          onChange={this.newTodos}
          placeholder="Add a new todo"
          value={this.state.newTodo}
        />
        <button
          className="btn-info mb-3 form-control"
          onClick={this.state.editing ? this.updateTodo : this.addTodo}
        >
          {this.state.editing ? 'Update todo' : 'Add todo'}
        </button>

        {!this.state.editing && (
          <ul className="list-group">
            {this.state.todos.map((todo, index) => {
              return (
                <li key={todo.id} className="list-group-item">
                  <button
                    className="btn-sm mr-4 btn btn-info"
                    onClick={() => {
                      this.editTodo(index);
                    }}
                  >
                    U
                  </button>
                  {todo.name}
                  <button
                    className="btn-sm ml-4 btn btn-danger"
                    onClick={() => {
                      this.removeTodo(index);
                    }}
                  >
                    Remove
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }

  // state = {
  //   count: 9,
  // };
  // minus = () => {
  //   this.setState({ count: this.state.count - 1 });
  // };
  // plus = () => {
  //   this.setState({ count: this.state.count + 1 });
  // };
  // render() {
  //   return (
  //     <div>
  //       <h3>{this.state.count % 2 === 0 ? 'even' : 'odd'}</h3>
  //       <button onClick={this.minus}>-</button>
  //       <span>{this.state.count}</span>
  //       <button onClick={this.plus}>+</button>
  //     </div>
  //   );
}

export default App;
