import React, { Component } from 'react';
import { Link } from "gatsby"
import Hyperlink from "./Hyperlink"

class Dropdown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shown: false,
            pointerIn: false,
            touch: false
        };
    }

    /*
    componentDidMount() {
        if (typeof window !== undefined) {
            window.addEventListener("touchstart", this.setState({touch: true}))
        }
    }

    // Hide this Dropdown menu if user clicks outside of it
    componentWillMount() {
        document.addEventListener('mousedown', this.handleClick, false);
    }
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    }

    toggleShown() {
        this.setState({shown: !this.state.shown});
    }
    
    // Show dropdown when user clicks button
    onClicked = (e) => { this.show() }
    */

    // Track whether the pointer is above this Dropdown element
    pointerIn = (e) => {
        // console.log("pointer in, touch=" + this.state.touch);
        if (!this.state.touch) {
            this.show();
        }
    }

    pointerOut = (e) => {
        // console.log("pointer out, touch=" + this.state.touch);
        if (!this.state.touch) {
            this.hide();
        }
    }

    handleClick = (e) => {
        this.setState({touch: false});
    }

    handleTouch = (e) => {
        this.setState({touch: true})
        if (this.state.pointerIn) {
            this.setState({shown: !this.state.shown});
        }
    }
    
    hide() {
        this.setState({shown: false});
    }

    show() {
        this.setState({shown: true});
    }

    onBlur = (e) => {
        if (this.state.touch) {
            this.hide()
        }
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
            <span
            onPointerEnter={this.pointerIn}
            onPointerLeave={this.pointerOut}
            onBlur={this.handleClick}
            onFocus={this.handleClick}
            onClick={this.handleClick}
            onTouchEnd={this.handleTouch}
            >
                <button style={buttonStyle} onClick={this.onClicked}>
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