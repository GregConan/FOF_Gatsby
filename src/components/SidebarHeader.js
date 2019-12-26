import React, {Component} from "react";
import '../style/style.css';

class SidebarHeader extends Component {
    
    constructor(props) {
        super(props);
    }
    
    /*
    toggleShown() {
        if (this.props.display === "block") {
            this.props.display = "none";
        } else {
            this.props.display = "table-cell";
        }
    }
    */

    render() { 
        const containerStyle = {
            borderRadius: "15px",
            color: this.props.color,
            display: "table-cell", // this.props.display
            marginLeft: "auto",
            marginRight: "auto"
        };

        const textStyle = {
            display: "block",
            lineHeight: "2px",
            fontSize: "16px",
            position: "relative",
            left: "10px",
            fontWeight: "bold",
            color: "#FFFFFF",
            fontFamily: "sans-serif",
        
            /* Black border around text */
            textShadow: `1px 1px 0 #000,
                        -1px 1px 0 #000,
                        1px -1px 0 #000,
                        -1px -1px 0 #000,
                        0px 1px 0 #000,
                        0px -1px 0 #000,
                        -1px 0px 0 #000,
                        1px 0px 0 #000,
                        2px 2px 0 #000,
                        -2px 2px 0 #000,
                        2px -2px 0 #000,
                        -2px -2px 0 #000,
                        0px 2px 0 #000,
                        0px -2px 0 #000,
                        -2px 0px 0 #000,
                        2px 0px 0 #000,
                        1px 2px 0 #000,
                        -1px 2px 0 #000,
                        1px -2px 0 #000,
                        -1px -2px 0 #000,
                        2px 1px 0 #000,
                        -2px 1px 0 #000,
                        2px -1px 0 #000,
                        -2px -1px 0 #000`	
        }

        return ( 
            <div>
                <div id={this.props.id} style={containerStyle} onClick={this.toggleShown}> 
                    <p style={textStyle}>{this.props.text}</p>
                </div><p class = "headerBr" />
            </div>
        );
        /*
        return (
            <div>
                <div id = "{this.props.id}" class = "header level{this.props.level} {this.props.color}" onclick = "toggleShown(this.id);">
                    <p class = "headerText" >{this.props.headerText}</p>
                    <p>TEST to show that sidebarHeader component works</p>
                </div><p class = "headerBr"  /> 
            </div>
        )
        */
    }
}

export default SidebarHeader;