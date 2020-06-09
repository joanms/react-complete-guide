import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi! I'm a React app.</h1>
        <p>This is really working!</p>
        <Person name="Joan" age="49" />
        <Person name="Jeanne" age="77">My Hobbies: Gardening</Person>
        <Person name="James" age="39"/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
