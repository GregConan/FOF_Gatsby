import React, { Component } from 'react';
import { Link } from "gatsby"
import Hyperlink from "./Hyperlink"

class Dropdown extends Component {

  constructor(props) {
      super(props);
      this.state = {
          shown: false,
      };

  }

  /*
  onEnter = (e) => {
    this.setState({shown: true});
  }

  onLeave = (e) => {
    this.setState({shown: false});
  }
  */

  onClicked = (e) => {
      this.setState({shown: !this.state.shown});
      // this.style.display = this.state.shown ? "none" : "inline-block";
  }

  render() { 
    const buttonStyle = {
        display: this.state.shown ? "none" : "flex", // "inline-block",
        zIndex: 4,
        position: "relative",
        wordWrap: "break-word",
        minWidth: "100%",
        minHeight: "100%",
        textAlign: "center",
        verticalAlign: "center"
    };
    const dropdownContentStyle = {
        display: this.state.shown ? "flex" : "none",
        borderStyle: "solid",
        borderRadius: "2px",
        borderWidth: "2px",
        position: "absolute",
        zIndex: 5,
        backgroundColor: "white",
    };
    

    return (
        <span onClick={this.onClicked}
        // onPointerEnter={this.onEnter}
        // onPointerLeave={this.onLeave}
        >
            <button style={buttonStyle}>
                {this.props.text}
            </button>
            <span style={dropdownContentStyle}>
                {this.props.children}
            </span>
        </span>
    )
  }
}

export default Dropdown;