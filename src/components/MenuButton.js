import React, { Component } from 'react';
import { Link } from "gatsby"
import Hyperlink from "./Hyperlink"

class MenuButton extends Component {
    render() {
        return (
            <Link to={this.props.to}><button style={{
                minWidth: "100%", minHeight: "100%"
            }}>{this.props.text}</button></Link>
        )
    }
}

export default MenuButton;