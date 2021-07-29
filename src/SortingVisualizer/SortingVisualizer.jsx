import React, { Component } from "react";
import ButtonsBar from "./Components/ButtonsBar/ButtonsBar.jsx";
import ArrayBar from "./Components/ArrayBar/ArrayBar.jsx";
import RangeSlider from "./Components/RangeSliders/RangeSlider.jsx";
import { randomIntFromInterval } from "./HelperFunctions.js";
import BubbleSort from "./SortingAlgorithms/BubbleSort/BubbleSort.js";
import SelectionSort from "./SortingAlgorithms/SelectionSort/SelectionSort.js";
import InsertionSort from "./SortingAlgorithms/InsertionSort/InsertionSort.js";
import "./SortingVisualizer.css";

export default class SortingVisualizer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      animationSpeed: 50,
      numberOfArrayBars: 10,
    };

    this.generateNewArray = this.generateNewArray.bind(this);
    this.bubbleSort = this.bubbleSort.bind(this);
    this.selectionSort = this.selectionSort.bind(this);
    this.insertionSort = this.insertionSort.bind(this);
    this.onChangeArrayBarRangeSlider =
      this.onChangeArrayBarRangeSlider.bind(this);
    this.onChangeAnimationSpeedRangeSlider =
      this.onChangeAnimationSpeedRangeSlider.bind(this);
  }

  componentDidMount() {
    this.generateNewArray();
  }

  generateNewArray() {
    const array = [];
    for (let i = 0; i < this.state.numberOfArrayBars; i++) {
      array.push(randomIntFromInterval(5, 70));
    }
    this.setState({ array: array });
  }

  onChangeArrayBarRangeSlider = (event, value) => {
    this.setState({ numberOfArrayBars: value });
    this.generateNewArray();
  };

  onChangeAnimationSpeedRangeSlider = (event, value) => {
    this.setState({ animationSpeed: value });
  };

  bubbleSort = () => {
    BubbleSort(this.state.array, this.state.animationSpeed);
  };

  selectionSort = () => {
    SelectionSort(this.state.array, this.state.animationSpeed);
  };

  insertionSort = () => {
    InsertionSort(this.state.array, this.state.animationSpeed);
  };

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
          <a className="navbar-brand" href="/">
            <b>7 Days, 7 Projects - Sorting Visualizer (Day 2/7)</b>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="https://jj1.dev/projects">
                  More Projects
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="main-container">
          <ButtonsBar
            generateNewArray={this.generateNewArray}
            bubbleSort={this.bubbleSort}
            selectionSort={this.selectionSort}
            insertionSort={this.insertionSort}
          />

          <ArrayBar array={this.state.array} />

          <RangeSlider
            numberOfArrayBars={this.state.numberOfArrayBars}
            animationSpeed={this.state.animationSpeed}
            onChangeArrayBarRangeSlider={this.onChangeArrayBarRangeSlider}
            onChangeAnimationSpeedRangeSlider={
              this.onChangeAnimationSpeedRangeSlider
            }
          />
        </div>
      </>
    );
  }
}
