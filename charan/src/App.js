import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
     
      <Router>
      <div>
        <nav>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>&emsp;
              <Link to="/">Home</Link>
            &emsp;
              <Link to="/about">About</Link>
              &emsp;
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

class Home extends React.Component {
  render() {
     return (
        <div>
           <h1>Rules:</h1>
           <ul>
             <li>
               A player should select a color
             </li>
             <li>
               One player should select a box alternatively
             </li>
             <li>
               If a player gets 4 boxes in a row or column or diagonally, they win
             </li>
           </ul>
        </div>
     )
  }
}
// export default Home;

class About extends React.Component {
  constructor(){
    super();
    this.state={
      player1 : "",
      player2 : "",
      p1Color : "",
      p2Color : ""
    }
  }
  render() {
     return (
        <div>
           <h1>Player1: </h1>
          <input type="text" placeholder="Player1 Name" onChange={this.readp1} value={this.state.player1}></input><br />
          <input type="color" onChange={this.readcolorp1} value={this.state.p1Color}></input><br />
          <h1>Player2: </h1>
          <input type="text" placeholder="Player2 Name" onChange={this.readp2} value={this.state.player2}></input><br />
          <input type="color" onChange={this.readcolorp2} value={this.state.p2Color}></input><br />
          <Router>
          <Link to="/board">Start Game</Link>
          <Switch>
          <Route path="/board">
            <Board />
          </Route>
        </Switch>
          </Router>
        </div>
     )
  }
  readp1 = (event) => {

    this.setState({ player1: event.target.value });
  };
  readp2 = (event) => {

    this.setState({ player2: event.target.value });
  };
  readcolorp1 = (event) => {
    this.setState({ p1Color: event.target.value});
  };
  readcolorp2 = (event) => {
    this.setState({ p2Color: event.target.value});
  };
}
// export default About;

class Contact extends React.Component {
  render() {
     return (
        <div>
           <h1>Contact...</h1>
        </div>
     )
  }
}
// export default Contact;
class Board extends React.Component {
  render() {
     return (
        <div>
           <table border="1">
            <tr  height="50">
              <td width = "50"></td>
              <td width = "50"></td>
              <td width = "50"></td>
              <td width = "50"></td>
              <td width = "50"></td>
              <td width = "50"></td>
              <td width = "50"></td>
            </tr>
            <tr  height="50">
              <td width = "50"></td>
              <td width = "50"></td>
              <td width = "50"></td>
              <td width = "50"></td>
              <td width = "50"></td>
              <td width = "50"></td>
              <td width = "50"></td>
            </tr>
            <tr  height="50">
              <td width = "50"></td>
              <td width = "50"></td>
              <td width = "50"></td>
              <td width = "50"></td>
              <td width = "50"></td>
              <td width = "50"></td>
              <td width = "50"></td>
            </tr>
            <tr  height="50">
              <td width = "50"></td>
              <td width = "50"></td>
              <td width = "50"></td>
              <td width = "50"></td>
              <td width = "50"></td>
              <td width = "50"></td>
              <td width = "50"></td>
            </tr>
            <tr  height="50">
              <td width = "50"></td>
              <td width = "50"></td>
              <td width = "50"></td>
              <td width = "50"></td>
              <td width = "50"></td>
              <td width = "50"></td>
              <td width = "50"></td>
            </tr>
            <tr  height="50">
              <td width = "50"></td>
              <td width = "50"></td>
              <td width = "50"></td>
              <td width = "50"></td>
              <td width = "50"></td>
              <td width = "50"></td>
              <td width = "50"></td>
            </tr>
           </table>
        </div>
     )
  }
}
