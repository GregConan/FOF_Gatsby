import React, { Component } from 'react';
import { Link } from "gatsby"
import Hyperlink from "./Hyperlink"

class Dropdown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shown: false,
            pointerIn: false,
            touch: false,
            touchingNow: false
        };
    }

    // Track whether the pointer is above this Dropdown element
    pointerIn = (e) => {
        // console.log("pointer in, touch=" + this.state.touch);
        this.setState({pointerIn: true});
        if (!this.state.touch) {
            this.setState({shown: true});
        }
    }

    pointerOut = (e) => {
        // console.log("pointer out, touch=" + this.state.touch);
        this.setState({pointerIn: false});
        if (!this.state.touch) {
            this.setState({shown: false});
        }
    }

    startedTouching = (e) => {
        touches = e.changedTouches
        var i = 0
        while (i < touches.length) {
            if (this == touches.item(i)) {
                this.setState({touch: true})
                this.setState({touchingNow: true})
                this.setState({shown: !this.state.shown})
                i = touches.length;
            } else {
                i++;
            }
        }
    }

    doneTouching = (e) => {
        this.setState({touch: true})
        if (this.state.touchingNow) {
            this.setState({touchingNow: false})
        }
    }

    handleClick = (e) => {
        this.setState({touch: false});
    }

    handleTouch = (e) => {
        /*
        this.setState({shown: this.state.pointerIn})
        if (this.state.pointerIn) {
            this.setState({shown: !this.state.shown});
        }
        */
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
            // onBlur={this.handleClick}
            // onFocus={this.handleClick}
            // onClick={this.handleClick}
            onTouchStart={this.startedTouching}
            onTouchEnd={this.doneTouching}
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

/*
    // Show dropdown when user touches button
    onClicked = (e) => {
        if (this.state.touch) {
            if (this.state.shown) {
                if (this.state.pointerIn) {
                    this.setState({shown: false}); // !this.state.shown});
                }
            } else {
                this.setState({shown: true})
            }
        }
    }

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
*/

export default Dropdown;