import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateForm from './components/CreateForm';
import List from './components/List';

class App extends Component {
  constructor() {
    super();
    this.state = {
      lists:[{item: "Buy flowers"}, {item: "Clean the house"}, {item: "Do the laundry"}]
      };
    this.updateList = this.updateList.bind(this);
  }


  updateList(newToDo) {
    this.setState({lists:newTodo});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to The To Do List!</h2>
        </div>
        <div>
          <h3>Add to Your To Do List</h3>
          <CreateForm onCreate={this.props.onCreate}/>
        </div>
        <div>
          <List/>
        </div>
      </div>
    );
  }
}

export default App;