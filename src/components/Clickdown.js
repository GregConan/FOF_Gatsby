import React, { Component } from 'react';
import { Link } from "gatsby"
import Hyperlink from "./Hyperlink"

class Clickdown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shown: false,
        };
        this.hide = this.hide.bind(this);
        this.show = this.show.bind(this);
    }

    show() {
        this.setState({shown: true});
    }

    hide() {
        this.setState({shown: false});
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
            <span>
                <button style={buttonStyle} onClick={this.show}>
                    {this.props.text}
                </button>
                <span style={dropdownContentStyle} onClick={this.hide}>
                    {this.props.children}
                </span>
            </span>
        )
    }
}


export default Clickdown;