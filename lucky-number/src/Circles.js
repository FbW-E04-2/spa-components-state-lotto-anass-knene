// import React from "react";
// import { Component } from "react";
// import "./style.css";
// export default class Circles extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       numbers: [],
//     };

//     this.handleClick = this.handleClick.bind(this);
//     this.reset = this.reset.bind(this);
//   }

//   pushNumbers = (counter) => {
//     let emptyArr = [];
//     let randomGenerator = () => {
//       return Math.floor(Math.random() * 49) + 1;
//     };

//     let firstNumber = randomGenerator();
//     emptyArr.push(firstNumber); // empty arr contains a number
//     for (let i = 0; i < 5; i++) {
//       let num = randomGenerator();

//       while (emptyArr.includes(num)) {
//         num = randomGenerator();
//       }
//       emptyArr.push(num);
//     }

//     return emptyArr;
//   };

//   handleClick() {
//     this.setState({
//       numbers: this.pushNumbers(6),
//     });
//   }

//   reset() {
//     this.setState({
//       numbers: [],
//     });
//   }

//   render() {
//     return (
//       <div
//         className="heroDiv"
//         style={{ textAlign: "center", marginTop: "150px" }}
//       >
//         <h1>LOTTO 6/49</h1>
//         <h2>Generating lucky numbers</h2>

//         {this.state.numbers.map((num, i) => {
//           return (
//             <div className="circle" key={i}>
//               <p>{num}</p>
//             </div>
//           );
//         })}

//         <div className="button-container">
//           <button
//             className="button"
//             style={{
//               padding: "25px  100px",
//               margin: "20px",
//               color: "skyblue",
//             }}
//             onClick={this.reset}
//           >
//             Reset
//           </button>
//           <button
//             className="button"
//             style={{
//               padding: "25px 150px",
//               backgroundColor: "skyblue",
//               color: "white",
//             }}
//             onClick={this.handleClick}
//           >
//             Show me lucky numbers
//           </button>
//         </div>
//       </div>
//     );
//   }
// }
import React, { useState } from "react";

import "./style.css";
export default function Circles() {
  const { numbers, setNumbers } = useState([]);

  // this.handleClick = this.handleClick.bind(this);
  // this.reset = this.reset.bind(this);

  const pushNumbers = () => {
    let emptyArr = [];
    let randomGenerator = () => {
      return Math.floor(Math.random() * 49) + 1;
    };

    let firstNumber = randomGenerator();
    emptyArr.push(firstNumber); // empty arr contains a number
    for (let i = 0; i < 5; i++) {
      let num = randomGenerator();

      while (emptyArr.includes(num)) {
        num = randomGenerator();
      }
      emptyArr.push(num);
    }

    return emptyArr;
  };

  const handleClick = () => {
    setNumbers({
      numbers: pushNumbers(6),
    });
  };

  const reset = () => {
    setNumbers({
      numbers: [],
    });
  };

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
          onClick={reset}
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
          onClick={handleClick}
        >
          Show me lucky numbers
        </button>
      </div>
    </div>
  );
}
