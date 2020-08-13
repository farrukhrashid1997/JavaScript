import React, { Component } from "react";
import "./Metronome.css";
import click1 from './click1.wav'
import click2 from './click2.wav'

class Metronome extends Component {
  constructor(props) {
    super(props);

    this.click1 = new Audio(click1)
    this.click2 = new Audio(click2)

    this.state = {
      bpm: 100,
      count: 0,
      beatsPerMeasure: 4,
      playing: false,
    };
  }

  // handleBpmChange = event => {
  //     this.setState({
  //         bpm: event.target.value,
  //     })
  // }

  startStop = () => {this.click.play()}


  handleBpmChange = (event) => {
    this.setState({ bpm: event.target.value });
  };

  render() {
    const { bpm, playing } = this.state;

    return (
      <div className="metronome">
        <div className="bpm-slider">
          <div>{bpm} BPM</div>
          <input
            type="range"
            min="60"
            max="240"
            value={bpm}
            onChange={this.handleBpmChange}
          ></input>
        </div>
        <button onClick = {this.startStop}>{playing ? "Stop" : "Start"}</button>
      </div>
    );
  }
}

export default Metronome;
