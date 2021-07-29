// ## This component includes the buttons for sorting algorithms and also generating new array. ## //

import React, { Component } from "react";
import "./ButtonsBar.css";

export default class ButtonsBar extends Component {
  render() {
    return (
      <div className="buttons-bar">
        <button
          onClick={() => this.props.generateNewArray()}
          id="reset"
          className="btn btn-warning"
        >
          Generate New Array
        </button>
        <button
          id="bubbleSortButton"
          onClick={() => this.props.bubbleSort()}
          className="btn btn-primary"
        >
          Bubble Sort
        </button>
        <button
          id="selectionSortButton"
          onClick={() => this.props.selectionSort()}
          className="btn btn-primary"
        >
          Selection Sort
        </button>
        <button
          id="insertionSortButton"
          onClick={() => this.props.insertionSort()}
          className="btn btn-primary"
        >
          Insertion Sort
        </button>
      </div>
    );
  }
}
