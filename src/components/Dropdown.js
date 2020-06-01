import React, { Component } from 'react';
import { Link } from "gatsby"
import Hyperlink from "./Hyperlink"

class Dropdown extends Component {

  constructor(props) {
      super(props);
      this.state = {
          shown: false,
          mouseIn: false
      };

  }

  // Show dropdown when user clicks button
  onClicked = (e) => { this.setState({shown: true}); }

  // Track whether the pointer is above this Dropdown element
  changePointer = (e) => { this.setState({mouseIn: !this.state.mouseIn}) }

  /*
  // Hide this Dropdown menu if user clicks outside of it
  componentWillMount() {
      document.addEventListener('mousedown', this.handleClick, false);
  }
  componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClick, false);
  }
  */
  handleClick = (e) => {
    this.setState({shown: this.state.mouseIn});
  }

  render() { 
      
    const buttonStyle = {
        display: this.state.shown ? "none" : "flex",
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
          onPointerEnter={this.changePointer}
          onPointerLeave={this.changePointer}
          onBlur={this.handleClick}
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