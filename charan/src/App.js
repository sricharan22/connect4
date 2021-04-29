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
            <button type="submit" class="btn btn-warning mt-5"><Link to="/">Home</Link></button>
            &emsp;
            <button type="submit" class="btn btn-warning mt-5"><Link to="/game">Game</Link></button>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/game">
            <About />
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
      <div style={{ padding: 15 }}>
        <h2>Player1:
        <input type="text" placeholder="Player1 Name" onChange={this.readp1} value={this.state.player1}></input> &emsp; &emsp;
        Player1 Colour:
        <input type="color" onChange={this.readcolorp1} value={this.state.p1Color}></input></h2>
        <h2>Player2:
        <input type="text" placeholder="Player2 Name" onChange={this.readp2} value={this.state.player2}></input> &emsp; &emsp;
        Player2 Colour:
        <input type="color" onChange={this.readcolorp2} value={this.state.p2Color}></input></h2>
        <Router>
        <button type="submit" class="btn btn-warning mt-5"><Link to="/board">Start Game</Link></button>
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
    localStorage.setItem("P1", event.target.value);
    this.setState({ player1: event.target.value });
  };
  readp2 = (event) => {
    localStorage.setItem("P2", event.target.value);
    this.setState({ player2: event.target.value });
  };
  readcolorp1 = (event) => {
    localStorage.setItem("P1color", event.target.value);
    this.setState({ p1Color: event.target.value });
  };
  readcolorp2 = (event) => {
    localStorage.setItem("P2color", event.target.value);
    this.setState({ p2Color: event.target.value });
  };
}

// export default Contact;
class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      secs:0,
      count:0,
      turn: true,
      time:0,
      P1: "",
      P2: "",
      color1: "",
      color2: ""
    }
  }

  componentDidMount() {
    var play1 = localStorage.getItem("P1");
    var play2 = localStorage.getItem("P2");
    var col1 = localStorage.getItem("P1color");
    var col2 = localStorage.getItem("P2color");
    this.setState({
      P1: play1,
      P2: play2,
      color1: col1,
      color2: col2
    });
    this.start();
  }
  render() {
    return (
      <div>
        <label id="minutes">00</label>:<label id="seconds">00</label>
        <h2>Player1: {this.state.P1} &emsp;Player2: {this.state.P2}</h2>
        <h2 id="disp">{this.state.P1}'s turn </h2>
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

  start(){
    this.state.time = setInterval(() => {
      // alert(typeof(time));
      var totalSeconds=this.state.secs;
      this.setState({
        secs:totalSeconds+1
      });
      var minutesLabel = document.getElementById("minutes");
      var secondsLabel = document.getElementById("seconds");
      secondsLabel.innerHTML = this.pad(this.state.secs % 60);
      minutesLabel.innerHTML = this.pad(parseInt(this.state.secs / 60));
    }, 1000)
    return ()=> {
      // clearInterval(time);
    };
  }

  col1 = (event) => {
    // alert(this.state.color1);
    var ans = this.checkrow();
    if (ans == 1) {
      clearInterval(this.state.time);
      ReactDOM.render(<Winner name={this.state.P1} time={this.state.secs} moves={this.state.count} />, document.getElementById("root"));
    }
    else if (ans == 2) {
      // alert();
      clearInterval(this.state.time);
      ReactDOM.render(<Winner name={this.state.P2} time={this.state.secs} moves={this.state.count} />, document.getElementById("root"));
    }
    else {
  
        const x = Number(event.target.id);
        // console.log(event.target.id);
        const col = x % 7;
        // alert(col);
        for (var i = 41; i >= 0; i--) {
          var d = String(i);
          if (i % 7 == col && document.getElementById(d).style.backgroundColor == "white") {
            if (this.state.turn) {
              if (event.target.style.backgroundColor == "white") {
                document.getElementById(d).style.backgroundColor = this.state.color1;
                this.setState({ turn: !this.state.turn, count:this.state.count+1 });
                document.getElementById("disp").innerHTML = this.state.P2 + "'s turn";
                break;
              }
            }
            else {
              if (event.target.style.backgroundColor == "white") {
                document.getElementById(d).style.backgroundColor = this.state.color2;
                this.setState({ turn: !this.state.turn ,count:this.state.count+1 });
                document.getElementById("disp").innerHTML = this.state.P1 + "'s turn";
                break;
              }
            }
          }
      }
    }
  }

  checkrow() {
    var countblue = 0;
    var countred = 0;
    for (var j = 0; j < 41; j = j + 7) {
      for (var i = 0; i < 7; i++) {
        if (this.RGBToHex(document.getElementById(String(j + i)).style.backgroundColor) == this.state.color2) {
          countblue++;
          countred = 0;
        }
        else if (this.RGBToHex(document.getElementById(String(j + i)).style.backgroundColor) == this.state.color1) {
          countred++;
          countblue = 0;
        }
        else {
          countblue = 0;
          countred = 0;
        }
        if (countred >= 4) {
          return 1;
        }
        if (countblue >= 4) {
          return 2;
        }
      }
    }
    return this.checkcol();
  }

  checkcol() {
    var countblue = 0;
    var countred = 0;
    for (var j = 0; j < 7; j ++) {
      for (var i = 0; i < 42; i = i+7) {
        if (this.RGBToHex(document.getElementById(String(j + i)).style.backgroundColor) == this.state.color2) {
          countblue++;
          countred = 0;
        }
        else if (this.RGBToHex(document.getElementById(String(j + i)).style.backgroundColor) == this.state.color1) {
          countred++;
          countblue = 0;
        }
        else {
          countblue = 0;
          countred = 0;
        }
        if (countred >= 4) {
          return 1;
        }
        if (countblue >= 4) {
          return 2;
        }
      }
    }
    return this.checkdiag();
  }

  checkdiag(){
    for(var i=0;i<21;i++){
      if(i<3 || (i>6 && i<10) || (i>13 && i<17)){
        if((this.RGBToHex(document.getElementById(String(i)).style.backgroundColor) == 
        this.RGBToHex(document.getElementById(String(i+8)).style.backgroundColor)) && 
        (this.RGBToHex(document.getElementById(String(i)).style.backgroundColor) == 
        this.RGBToHex(document.getElementById(String(i+16)).style.backgroundColor)) &&
        (this.RGBToHex(document.getElementById(String(i)).style.backgroundColor) == 
        this.RGBToHex(document.getElementById(String(i+24)).style.backgroundColor))){
          if((this.RGBToHex(document.getElementById(String(i)).style.backgroundColor))== this.state.color1){
            return 1;
          }
          else if((this.RGBToHex(document.getElementById(String(i)).style.backgroundColor))== this.state.color2){
            return 2;
          }
        }
      }
      else if((i>3 && i<7) || (i>10 && i<14) || (i>17 && i<21)){
        if((this.RGBToHex(document.getElementById(String(i)).style.backgroundColor) == 
        this.RGBToHex(document.getElementById(String(i+6)).style.backgroundColor)) && 
        (this.RGBToHex(document.getElementById(String(i)).style.backgroundColor) == 
        this.RGBToHex(document.getElementById(String(i+12)).style.backgroundColor)) &&
        (this.RGBToHex(document.getElementById(String(i)).style.backgroundColor) == 
        this.RGBToHex(document.getElementById(String(i+18)).style.backgroundColor))){
          if((this.RGBToHex(document.getElementById(String(i)).style.backgroundColor))== this.state.color1){
            return 1;
          }
          else if((this.RGBToHex(document.getElementById(String(i)).style.backgroundColor))== this.state.color2){
            return 2;
          }
        }
      }
      else{
        if((this.RGBToHex(document.getElementById(String(i)).style.backgroundColor) == 
        this.RGBToHex(document.getElementById(String(i+6)).style.backgroundColor)) && 
        (this.RGBToHex(document.getElementById(String(i)).style.backgroundColor) == 
        this.RGBToHex(document.getElementById(String(i+12)).style.backgroundColor)) &&
        (this.RGBToHex(document.getElementById(String(i)).style.backgroundColor) == 
        this.RGBToHex(document.getElementById(String(i+18)).style.backgroundColor))){
          if((this.RGBToHex(document.getElementById(String(i)).style.backgroundColor))== this.state.color1){
            return 1;
          }
          else if((this.RGBToHex(document.getElementById(String(i)).style.backgroundColor))== this.state.color2){
            return 2;
          }
        }
        else if((this.RGBToHex(document.getElementById(String(i)).style.backgroundColor) == 
        this.RGBToHex(document.getElementById(String(i+8)).style.backgroundColor)) && 
        (this.RGBToHex(document.getElementById(String(i)).style.backgroundColor) == 
        this.RGBToHex(document.getElementById(String(i+16)).style.backgroundColor)) &&
        (this.RGBToHex(document.getElementById(String(i)).style.backgroundColor) == 
        this.RGBToHex(document.getElementById(String(i+24)).style.backgroundColor))){
          if((this.RGBToHex(document.getElementById(String(i)).style.backgroundColor))== this.state.color1){
            return 1;
          }
          else if((this.RGBToHex(document.getElementById(String(i)).style.backgroundColor))== this.state.color2){
            return 2;
          }
        }
      }
    }
    return 0;
  }

  RGBToHex(rgb) {
    let sep = rgb.indexOf(",") > -1 ? "," : " ";
    rgb = rgb.substr(4).split(")")[0].split(sep);
    let r = (+rgb[0]).toString(16),
      g = (+rgb[1]).toString(16),
      b = (+rgb[2]).toString(16);
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
    return "#" + r + g + b;
  }
  pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
      return "0" + valString;
    } else {
      return valString;
    }
  }
}

class Winner extends React.Component{
  constructor(){
    super();
    this.state={
      move:0,
      min:"",
      sec:""
    }
  }

  componentDidMount(){
    var count=this.props.moves;
    count= Math.ceil((count/2));
    var secs=this.props.time;
    this.setState({
      sec:this.pad(secs % 60),
      min:this.pad(parseInt(secs / 60)),
      move:count
    })
  }

  pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
      return "0" + valString;
    } else {
      return valString;
    }
  }

  render(){
    return(
      <h1>Winner is {this.props.name} <br /> Won in {this.state.min } : {this.state.sec} secs <br /> Total moves Made: {this.state.move}</h1>
    );

  }
}
