import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <h2>Welcome to React</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to='/products'>products</Link>
              </li>
            </ul>

          </div>
          <p className="App-intro">
            To get started, edit
            <code>src/App.js</code>
            and save to reload.
          </p>

          <Route exact path="/" component={Home}/>
          <Route path="/products" component={Products}/>
        </div>
      </Router>

    );
  }
}

export default App;
