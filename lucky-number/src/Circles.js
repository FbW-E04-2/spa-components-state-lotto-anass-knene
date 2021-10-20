import React from "react";
import { Component } from "react";
import "./style.css";
export default class Circles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numbers: [],
    };

    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  pushNumbers = (counter) => {
    let emptyArr = [];
    let randomGenerator = (num) => {
      return parseInt(Math.random() * num + 1);
    };
    while (counter) {
      let randomNum = randomGenerator(49);
      while (emptyArr.indexOf(randomNum) !== -1) {
        randomNum = randomGenerator(49);
      }
      emptyArr.push(randomNum);
      counter--;
    }
    emptyArr[emptyArr.length] = randomGenerator(10);
    return emptyArr;
  };

  handleClick() {
    this.setState({
      numbers: this.pushNumbers(6),
    });
  }

  reset() {
    this.setState({
      numbers: [],
    });
  }

  render() {
    return (
      <div
        className="heroDiv"
        style={{ textAlign: "center", marginTop: "150px" }}
      >
        <h1>LOTTO 6/49</h1>
        <h2>Generating lucky numbers</h2>

        {this.state.numbers.map((num, i) => {
          return (
            <div className="circle" key={i}>
              <p>{num}</p>
            </div>
          );
        })}

        <div className="button-container">
          <button
            className="button"
            style={{
              padding: "25px  100px",
              margin: "20px",
              color: "skyblue",
            }}
            onClick={this.reset}
          >
            Reset
          </button>
          <button
            className="button"
            style={{
              padding: "25px 150px",
              backgroundColor: "skyblue",
              color: "white",
            }}
            onClick={this.handleClick}
          >
            Show me lucky numbers
          </button>
        </div>
      </div>
    );
  }
}
