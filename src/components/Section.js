import React, {Component} from "react";
import '../style/style.css';

class Section extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            shown: false,
        };
        this.toggleShown = this.toggleShown.bind(this);
    }

    toggleShown() {
        this.setState({shown: (!this.state.shown)});
    }

    render() { 
        const containerStyle = {
            backgroundImage: "linear-gradient(to right, #EEC1FF, white)",
            borderStyle: "solid",
            borderRadius: "15px", 
            listStylePosition: "inside",
            margin: "10px",
            cursor: "pointer",
            padding: "10px",
            fontWeight: "bold",
            fontFamily: "sans-serif",
        };

        const textStyle = {
            display: this.state.shown ? "block" : "none",
        }

        return (
        <div>
            <div id={this.props.id} style={containerStyle} onClick={this.toggleShown}> 
                <p>{this.props.summary}</p>
            </div>
            <br />
            <div style={textStyle}>
                {this.props.children}
            </div>
        </div>     
        )

        /*
        return ( 
            <div>
                <div id={this.props.id} style={containerStyle} onClick={this.toggleShown}> 
                    <p style={textStyle}>{this.props.text}</p>
                </div><p className = "headerBr" />
            </div>
        );
        
        return (
            <div>
                <div id = "{this.props.id}" class = "header level{this.props.level} {this.props.color}" onclick = "toggleShown(this.id);">
                    <p className = "headerText" >{this.props.headerText}</p>
                    <p>TEST to show that sidebarHeader component works</p>
                </div><p className = "headerBr"  /> 
            </div>
        )
        */
    }
}

export default Section;