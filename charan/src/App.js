import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
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
  constructor() {
    super();
    this.state = {
      player1: "",
      player2: "",
      p1Color: "",
      p2Color: ""
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
    this.setState({ p1Color: event.target.value });
  };
  readcolorp2 = (event) => {
    this.setState({ p2Color: event.target.value });
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
  constructor() {
    super();
    this.state = {
      // color : "pink",
      turn: true,
      background: "red"
    }
  }
  render() {
    return (
      <div>
        <table border="1">
          <tr height="50">
            <td width="50" id="0" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="1" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="2" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="3" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="4" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="5" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="6" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
          </tr>
          <tr height="50">
            <td width="50" id="7" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="8" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="9" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="10" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="11" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="12" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="13" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
          </tr>
          <tr height="50">
            <td width="50" id="14" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="15" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="16" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="17" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="18" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="19" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="20" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
          </tr>
          <tr height="50">
            <td width="50" id="21" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="22" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="23" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="24" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="25" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="26" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="27" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
          </tr>
          <tr height="50">
            <td width="50" id="28" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="29" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="30" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="31" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="32" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="33" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="34" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
          </tr>
          <tr height="50">
            <td width="50" id="35" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="36" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="37" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="38" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="39" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="40" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="41" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
          </tr>
        </table>
      </div>
    );
  }
  col1 = (event) => {
    const x = Number(event.target.id);
    // console.log(event.target.id);
    const col = x % 7;
    // alert(col);
    for (var i = 41; i >= 0; i--) {
      var d = String(i);
      if (i % 7 == col) {
        // alert(i);
        if (this.state.turn) {
          if (event.target.style.backgroundColor == "white") {
            event.target.style.backgroundColor = "red";
            this.setState({ turn: !this.state.turn });
            break;
          }
        }
        else {
          if (event.target.style.backgroundColor == "white") {
            event.target.style.backgroundColor = "blue";
            this.setState({ turn: !this.state.turn });
            break;
          }
        }
      }
    }

  }
}
